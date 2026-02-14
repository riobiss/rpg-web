"use client"

import { useEffect, useRef, useState } from "react"
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
  const isInteractiveRef = useRef(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isBrushMode, setIsBrushMode] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [brushColor, setBrushColor] = useState(BRUSH_COLORS[0])

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
      if (!isInteractiveRef.current || isBrushModeRef.current) {
        return
      }

      event.evt.preventDefault()
      applyZoom(stage, event.evt.deltaY)
    }

    const handleDrawStart = () => {
      if (!isInteractiveRef.current || !isBrushModeRef.current) {
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
        strokeWidth: 4,
        lineCap: "round",
        lineJoin: "round",
      })

      currentLineRef.current = newLine
      drawLayerCurrent.add(newLine)
    }

    const handleDrawMove = () => {
      if (
        !isInteractiveRef.current ||
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

    const handleResize = () => {
      const currentContainer = stageContainerRef.current
      const currentStage = stageRef.current
      const currentImage = mapImageRef.current

      if (!currentContainer || !currentStage) {
        return
      }

      currentStage.size({
        width: currentContainer.clientWidth,
        height: currentContainer.clientHeight,
      })

      if (currentImage && !isDrawingRef.current) {
        fitImageToStage(currentStage, currentImage)
        currentStage.batchDraw()
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    stage.on("wheel", handleWheel)
    stage.on("mousedown touchstart", handleDrawStart)
    stage.on("mousemove touchmove", handleDrawMove)
    stage.on("mouseup touchend mouseleave touchcancel", handleDrawEnd)

    return () => {
      resizeObserver.disconnect()
      stage.off("wheel", handleWheel)
      stage.off("mousedown touchstart", handleDrawStart)
      stage.off("mousemove touchmove", handleDrawMove)
      stage.off("mouseup touchend mouseleave touchcancel", handleDrawEnd)
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
    syncInteraction(stageRef.current, isInteractive, isBrushMode)
  }, [isInteractive, isBrushMode])

  useEffect(() => {
    isBrushModeRef.current = isBrushMode
  }, [isBrushMode])

  useEffect(() => {
    brushColorRef.current = brushColor
  }, [brushColor])

  const handleEnableInteraction = () => {
    if (!isInteractive) {
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
        onClick={handleEnableInteraction}
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

        {!isInteractive ? (
          <button
            type="button"
            onClick={handleEnableInteraction}
            className={styles.interactionOverlay}
          >
            Clique no mapa para ativar interacao
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
) {
  if (!stage) {
    return
  }

  stage.draggable(isInteractive && !isBrushMode)
}

function applyZoom(stage: Konva.Stage, deltaY: number) {
  const oldScale = stage.scaleX()
  const pointer = stage.getPointerPosition()
  if (!pointer) {
    return
  }

  const scaleBy = 1.05
  const direction = deltaY > 0 ? -1 : 1
  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy

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
