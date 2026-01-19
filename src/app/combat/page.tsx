"use client"

import { useState } from "react"
import playersData from "@/data/rpg/World of Clans/entites/player"
import enemiesData from "@/data/rpg/World of Clans/entites/enemy"
import styles from "./page.module.css"
import { Character } from "@/types/Character"
import initTurnQueue from "@/lib/turns/initTurnQueue"
import { Turn } from "@/types/Turn"

type SelectionStep = "players" | "enemies" | "done"

export default function CombatPage() {
  const [turnOrder, setTurnOrder] = useState<Character[]>([])
  const [selectionStep, setSelectionStep] = useState<SelectionStep>("players")
  const [turnQueue, setTurnQueue] = useState<Turn[]>([])

  function initCombat() {
    const queue = initTurnQueue(turnOrder)
    setTurnQueue(queue)
    setTurnOrder(queue.map((t) => t.entity))
    setSelectionStep("done")
  }

  function addCharacterToTurnOrder(character: Character) {
    setTurnOrder((current) => {
      if (current.some((c) => c.id === character.id)) return current
      return [
        ...current,
        {
          ...character,
          alive: true,
        },
      ]
    })
  }

  function isCharacterSelected(id: number) {
    return turnOrder.some((c) => c.id === id)
  }

  if (selectionStep === "done") {
    return (
      <div className={styles.container}>
        <aside className={styles.sideBar}>
          <button>Turnos</button>
          {turnOrder.map((character) => (
            <p key={character.id}>{character.name}</p>
          ))}
        </aside>
        Ola combate
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <aside className={styles.sideBar}>
        <button>Turnos</button>
        {turnOrder.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
      </aside>

      <section className={styles.containerInput}>
        <p>Selecione quem batalhará</p>
        {selectionStep === "players" &&
          playersData.map((player) => (
            <div className={styles.containerCharacter} key={player.id}>
              <p
                style={{
                  color: isCharacterSelected(player.id) ? "green" : "red",
                }}
              >
                {player.name}
              </p>

              <button onClick={() => addCharacterToTurnOrder(player)}>
                Selecionar
              </button>
            </div>
          ))}
        {selectionStep === "enemies" &&
          enemiesData.map((enemy) => (
            <div className={styles.containerCharacter} key={enemy.id}>
              <p
                style={{
                  color: isCharacterSelected(enemy.id) ? "green" : "red",
                }}
              >
                {enemy.name}
              </p>
              <button onClick={() => addCharacterToTurnOrder(enemy)}>
                Selecionar
              </button>
            </div>
          ))}
        <button onClick={() => setSelectionStep("enemies")}>Próximo</button>
        {selectionStep === "enemies" && (
          <button onClick={initCombat}>Pronto</button>
        )}
      </section>
    </div>
  )
}
