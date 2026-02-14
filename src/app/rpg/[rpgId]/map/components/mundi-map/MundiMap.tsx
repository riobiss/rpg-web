"use client"

import { type MutableRefObject, useEffect, useRef, useState } from "react"
import Konva from "konva"
import Image from "next/image"
import styles from "./MundiMap.module.css"

const MAP_SRC = "/map/map-mundi.png"
const BRUSH_COLORS = ["#c4243b", "#ff7a18", "#f5e6c8", "#4f9cff", "#34c759"]

export function MundiMap() {
  const frameRef = useRef<HTMLDivElement | null>(null)
  const stageContainerRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<Konva.Stage | null>(null)
  const mapImageRef = useRef<Konva.Image | null>(null)
  const drawLayerRef = useRef<Konva.Layer | null>(null)
  const currentLineRef = useRef<Konva.Line | null>(null)
  const isDrawingRef = useRef(false)
  const isBrushModeRef = useRef(false)
  const brushColorRef = useRef(BRUSH_COLORS[0])
  const brushSizeRef = useRef(4)
  const isInteractiveRef = useRef(false)
  const isFullscreenRef = useRef(false)
  const isPinchingRef = useRef(false)
  const pinchLastCenterRef = useRef<{ x: number; y: number } | null>(null)
  const pinchLastDistanceRef = useRef<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isBrushMode, setIsBrushMode] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [brushColor, setBrushColor] = useState(BRUSH_COLORS[0])
  const [brushSize, setBrushSize] = useState(4)

  useEffect(() => {
    const container = stageContainerRef.current
    if (!container || stageRef.current) {
      return
    }

    const stage = new Konva.Stage({
      container,
      width: container.clientWidth,
      height: container.clientHeight,
      draggable: false,
    })

    const mapLayer = new Konva.Layer()
    const drawLayer = new Konva.Layer()
    stage.add(mapLayer)
    stage.add(drawLayer)

    stageRef.current = stage
    drawLayerRef.current = drawLayer

    const imageObj = new window.Image()
    imageObj.src = MAP_SRC
    imageObj.onload = () => {
      const mapImage = new Konva.Image({
        image: imageObj,
        x: 0,
        y: 0,
        listening: false,
      })

      mapImageRef.current = mapImage
      mapLayer.add(mapImage)
      fitImageToStage(stage, mapImage)
      mapLayer.draw()
    }

    const handleWheel = (event: Konva.KonvaEventObject<WheelEvent>) => {
      if (!canInteractMap(isInteractiveRef.current, isFullscreenRef.current) || isBrushModeRef.current) {
        return
      }

      event.evt.preventDefault()
      applyZoom(stage, event.evt.deltaY)
    }

    const handleDrawStart = () => {
      if (!canInteractMap(isInteractiveRef.current, isFullscreenRef.current) || !isBrushModeRef.current) {
        return
      }

      const drawLayerCurrent = drawLayerRef.current
      const pointer = getContentPointerPosition(stage)
      if (!drawLayerCurrent || !pointer) {
        return
      }

      isDrawingRef.current = true
      const newLine = new Konva.Line({
        points: [pointer.x, pointer.y],
        stroke: brushColorRef.current,
        strokeWidth: brushSizeRef.current,
        lineCap: "round",
        lineJoin: "round",
      })

      currentLineRef.current = newLine
      drawLayerCurrent.add(newLine)
    }

    const handleDrawMove = () => {
      if (
        !canInteractMap(isInteractiveRef.current, isFullscreenRef.current) ||
        !isBrushModeRef.current ||
        !isDrawingRef.current
      ) {
        return
      }

      const line = currentLineRef.current
      const pointer = getContentPointerPosition(stage)
      if (!line || !pointer) {
        return
      }

      line.points([...line.points(), pointer.x, pointer.y])
      drawLayerRef.current?.batchDraw()
    }

    const handleDrawEnd = () => {
      isDrawingRef.current = false
      currentLineRef.current = null
    }

    const handleTouchStart = (event: Konva.KonvaEventObject<TouchEvent>) => {
      const touches = event.evt.touches
      if (touches.length >= 2) {
        isPinchingRef.current = true
        syncInteraction(
          stage,
          isInteractiveRef.current,
          isBrushModeRef.current,
          isFullscreenRef.current,
          isPinchingRef.current,
        )
        isDrawingRef.current = false
        currentLineRef.current = null
        pinchLastCenterRef.current = null
        pinchLastDistanceRef.current = null
        return
      }

      handleDrawStart()
    }

    const handleTouchMove = (event: Konva.KonvaEventObject<TouchEvent>) => {
      const touches = event.evt.touches
      if (touches.length >= 2) {
        if (!canInteractMap(isInteractiveRef.current, isFullscreenRef.current)) {
          return
        }

        if (!isPinchingRef.current) {
          isPinchingRef.current = true
          syncInteraction(
            stage,
            isInteractiveRef.current,
            isBrushModeRef.current,
            isFullscreenRef.current,
            isPinchingRef.current,
          )
          pinchLastCenterRef.current = null
          pinchLastDistanceRef.current = null
        }

        event.evt.preventDefault()
        applyPinchZoom(stage, touches, pinchLastCenterRef, pinchLastDistanceRef)
        return
      }

      if (isPinchingRef.current) {
        isPinchingRef.current = false
        pinchLastCenterRef.current = null
        pinchLastDistanceRef.current = null
        syncInteraction(
          stage,
          isInteractiveRef.current,
          isBrushModeRef.current,
          isFullscreenRef.current,
          isPinchingRef.current,
        )
        return
      }

      handleDrawMove()
    }

    const handleTouchEnd = () => {
      isPinchingRef.current = false
      pinchLastCenterRef.current = null
      pinchLastDistanceRef.current = null
      syncInteraction(
        stage,
        isInteractiveRef.current,
        isBrushModeRef.current,
        isFullscreenRef.current,
        isPinchingRef.current,
      )
      handleDrawEnd()
    }

    const handleResize = () => {
      const currentContainer = stageContainerRef.current
      const currentStage = stageRef.current
      const currentImage = mapImageRef.current

      if (!currentContainer || !currentStage) {
        return
      }

      const previousWidth = currentStage.width()
      const previousHeight = currentStage.height()

      currentStage.size({
        width: currentContainer.clientWidth,
        height: currentContainer.clientHeight,
      })

      if (currentImage && !isDrawingRef.current) {
        if (canInteractMap(isInteractiveRef.current, isFullscreenRef.current)) {
          keepViewOnResize(currentStage, previousWidth, previousHeight)
        } else {
          fitImageToStage(currentStage, currentImage)
        }
        currentStage.batchDraw()
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    stage.on("wheel", handleWheel)
    stage.on("mousedown", handleDrawStart)
    stage.on("mousemove", handleDrawMove)
    stage.on("mouseup mouseleave", handleDrawEnd)
    stage.on("touchstart", handleTouchStart)
    stage.on("touchmove", handleTouchMove)
    stage.on("touchend touchcancel", handleTouchEnd)

    return () => {
      resizeObserver.disconnect()
      stage.off("wheel", handleWheel)
      stage.off("mousedown", handleDrawStart)
      stage.off("mousemove", handleDrawMove)
      stage.off("mouseup mouseleave", handleDrawEnd)
      stage.off("touchstart", handleTouchStart)
      stage.off("touchmove", handleTouchMove)
      stage.off("touchend touchcancel", handleTouchEnd)
      stage.destroy()
      stageRef.current = null
      mapImageRef.current = null
      drawLayerRef.current = null
      currentLineRef.current = null
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const frame = frameRef.current
      setIsFullscreen(Boolean(frame && document.fullscreenElement === frame))
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    isInteractiveRef.current = isInteractive
    syncInteraction(
      stageRef.current,
      isInteractive,
      isBrushMode,
      isFullscreen,
      isPinchingRef.current,
    )
  }, [isInteractive, isBrushMode, isFullscreen])

  useEffect(() => {
    isBrushModeRef.current = isBrushMode
  }, [isBrushMode])

  useEffect(() => {
    brushColorRef.current = brushColor
  }, [brushColor])

  useEffect(() => {
    brushSizeRef.current = brushSize
  }, [brushSize])

  useEffect(() => {
    isFullscreenRef.current = isFullscreen
  }, [isFullscreen])

  const handleEnableInteraction = () => {
    if (isFullscreen && !isInteractive) {
      setIsInteractive(true)
    }
  }

  const toggleFullscreen = async () => {
    const frame = frameRef.current
    if (!frame) {
      return
    }

    if (document.fullscreenElement === frame) {
      await document.exitFullscreen()
      setIsBrushMode(false)
      return
    }

    await frame.requestFullscreen()
  }

  const resetView = () => {
    const stage = stageRef.current
    const mapImage = mapImageRef.current
    if (!stage || !mapImage) {
      return
    }

    fitImageToStage(stage, mapImage)
    stage.batchDraw()
  }

  const toggleBrushMode = () => {
    if (!isInteractive) {
      return
    }

    setIsBrushMode((prev) => {
      const next = !prev
      if (!next) {
        isDrawingRef.current = false
        currentLineRef.current = null
      }
      return next
    })
  }

  const clearLastDrawing = () => {
    const drawLayerCurrent = drawLayerRef.current
    if (!drawLayerCurrent) {
      return
    }

    const drawings = drawLayerCurrent.getChildren(
      (node) => node instanceof Konva.Line,
    )
    const lastDrawing = drawings[drawings.length - 1]
    if (!lastDrawing) {
      return
    }

    lastDrawing.destroy()
    drawLayerCurrent.batchDraw()
  }

  return (
    <section className={styles.wrapper}>
      <div
        ref={frameRef}
        className={`${styles.frame} ${isFullscreen ? styles.frameFullscreen : ""}`}
      >
        {isFullscreen ? (
          <div className={styles.topControls}>
            <button
              type="button"
              onClick={toggleBrushMode}
              className={`${styles.actionButton} ${styles.brushToggle} ${
                isBrushMode ? styles.brushToggleActive : ""
              }`}
              aria-label={
                isBrushMode ? "Desativar modo pincel" : "Ativar modo pincel"
              }
            >
              <Image
                src="/icons/drawIcon.svg"
                alt="Pincel"
                width={16}
                height={16}
              />
            </button>
            <button
              type="button"
              onClick={clearLastDrawing}
              className={`${styles.actionButton} ${styles.iconActionButton}`}
              aria-label="Limpar desenho anterior"
              title="Limpar desenho anterior"
            >
              <Image
                src="/icons/drawBack.svg"
                alt="Limpar desenho anterior"
                width={16}
                height={16}
                className={styles.whiteIcon}
              />
            </button>
            <button
              type="button"
              onClick={resetView}
              className={styles.actionButton}
            >
              Centralizar
            </button>
            {isBrushMode ? (
              <label className={styles.brushSizeControl}>
                Linha
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={brushSize}
                  onChange={(event) =>
                    setBrushSize(Number(event.currentTarget.value))
                  }
                />
                <span>{brushSize}px</span>
              </label>
            ) : null}
            <div
              className={styles.colorPicker}
              role="group"
              aria-label="Cores do pincel"
            >
              {BRUSH_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setBrushColor(color)}
                  className={`${styles.colorOption} ${
                    brushColor === color ? styles.colorOptionActive : ""
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Cor ${color}`}
                  title={`Cor ${color}`}
                />
              ))}
            </div>
          </div>
        ) : null}

        <div ref={stageContainerRef} className={styles.stageContainer} />

        {!canInteractMap(isInteractive, isFullscreen) ? (
          <button
            type="button"
            onClick={handleEnableInteraction}
            className={styles.interactionOverlay}
            disabled={!isFullscreen}
          >
            {isFullscreen
              ? "Clique no mapa para ativar interacao"
              : "Abra o mapa completo para interagir"}
          </button>
        ) : null}

        <button
          type="button"
          onClick={toggleFullscreen}
          className={styles.expandButton}
          aria-label={
            isFullscreen ? "Fechar mapa completo" : "Abrir mapa completo"
          }
          title={isFullscreen ? "Fechar" : "Abrir"}
        >
          <Image
            src={isFullscreen ? "/icons/closeImg.svg" : "/icons/openImg.svg"}
            alt={isFullscreen ? "Fechar" : "Abrir"}
            width={18}
            height={18}
          />
        </button>
      </div>
    </section>
  )
}

function syncInteraction(
  stage: Konva.Stage | null,
  isInteractive: boolean,
  isBrushMode: boolean,
  isFullscreen: boolean,
  isPinching: boolean,
) {
  if (!stage) {
    return
  }

  stage.draggable(
    canInteractMap(isInteractive, isFullscreen) && !isBrushMode && !isPinching,
  )
}

function canInteractMap(isInteractive: boolean, isFullscreen: boolean) {
  return isInteractive && isFullscreen
}

function applyZoom(stage: Konva.Stage, deltaY: number) {
  const oldScale = stage.scaleX()
  const pointer = stage.getPointerPosition()
  if (!pointer) {
    return
  }

  const scaleBy = 1.05
  const direction = deltaY > 0 ? -1 : 1
  const newScale = clampScale(
    direction > 0 ? oldScale * scaleBy : oldScale / scaleBy,
  )

  const mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  }

  stage.scale({ x: newScale, y: newScale })
  stage.position({
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  })
  stage.batchDraw()
}

function applyPinchZoom(
  stage: Konva.Stage,
  touches: TouchList,
  pinchLastCenterRef: MutableRefObject<{ x: number; y: number } | null>,
  pinchLastDistanceRef: MutableRefObject<number | null>,
) {
  if (touches.length < 2) {
    return
  }

  const touchA = touches[0]
  const touchB = touches[1]
  const containerRect = stage.container().getBoundingClientRect()
  const center = {
    x: (touchA.clientX + touchB.clientX) / 2 - containerRect.left,
    y: (touchA.clientY + touchB.clientY) / 2 - containerRect.top,
  }
  const distance = Math.hypot(
    touchB.clientX - touchA.clientX,
    touchB.clientY - touchA.clientY,
  )

  if (!pinchLastCenterRef.current || !pinchLastDistanceRef.current) {
    pinchLastCenterRef.current = center
    pinchLastDistanceRef.current = distance
    return
  }

  const oldScale = stage.scaleX()
  const pointTo = {
    x: (center.x - stage.x()) / oldScale,
    y: (center.y - stage.y()) / oldScale,
  }

  const scaleRatio = distance / pinchLastDistanceRef.current
  const newScale = clampScale(oldScale * scaleRatio)

  const dx = center.x - pinchLastCenterRef.current.x
  const dy = center.y - pinchLastCenterRef.current.y

  stage.scale({ x: newScale, y: newScale })
  stage.position({
    x: center.x - pointTo.x * newScale + dx,
    y: center.y - pointTo.y * newScale + dy,
  })
  stage.batchDraw()

  pinchLastCenterRef.current = center
  pinchLastDistanceRef.current = distance
}

function keepViewOnResize(
  stage: Konva.Stage,
  previousWidth: number,
  previousHeight: number,
) {
  if (previousWidth <= 0 || previousHeight <= 0) {
    return
  }

  const currentScale = stage.scaleX()
  const previousCenter = {
    x: previousWidth / 2,
    y: previousHeight / 2,
  }
  const contentPoint = {
    x: (previousCenter.x - stage.x()) / currentScale,
    y: (previousCenter.y - stage.y()) / currentScale,
  }

  const nextCenter = {
    x: stage.width() / 2,
    y: stage.height() / 2,
  }
  stage.position({
    x: nextCenter.x - contentPoint.x * currentScale,
    y: nextCenter.y - contentPoint.y * currentScale,
  })
}

function clampScale(scale: number) {
  const MIN_SCALE = 0.4
  const MAX_SCALE = 8
  return Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale))
}

function getContentPointerPosition(stage: Konva.Stage) {
  const pointer = stage.getPointerPosition()
  if (!pointer) {
    return null
  }

  const transform = stage.getAbsoluteTransform().copy()
  transform.invert()
  return transform.point(pointer)
}

function fitImageToStage(stage: Konva.Stage, mapImage: Konva.Image) {
  const imageSource = mapImage.image()
  if (!imageSource) {
    return
  }

  const imageSize = getImageSize(imageSource)
  if (!imageSize) {
    return
  }

  const stageWidth = stage.width()
  const stageHeight = stage.height()
  const widthScale = stageWidth / imageSize.width
  const heightScale = stageHeight / imageSize.height
  const scale = Math.min(widthScale, heightScale)

  mapImage.position({ x: 0, y: 0 })
  mapImage.size({ width: imageSize.width, height: imageSize.height })

  stage.scale({ x: scale, y: scale })
  stage.position({
    x: (stageWidth - imageSize.width * scale) / 2,
    y: (stageHeight - imageSize.height * scale) / 2,
  })
}

function getImageSize(
  source: CanvasImageSource,
): { width: number; height: number } | null {
  if ("width" in source && "height" in source) {
    const width = Number(source.width)
    const height = Number(source.height)
    if (width > 0 && height > 0) {
      return { width, height }
    }
  }

  if ("videoWidth" in source && "videoHeight" in source) {
    const width = Number(source.videoWidth)
    const height = Number(source.videoHeight)
    if (width > 0 && height > 0) {
      return { width, height }
    }
  }

  return null
}
