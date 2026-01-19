"use client"

import players from "@/data/rpg/World of Clans/entites/player"
import styles from "./page.module.css"
import { Character } from "@/types/Character"
import { useState } from "react"
import enemy from "@/data/rpg/World of Clans/entites/enemy"

export default function CombatPage() {
  const [turnos, setTurnos] = useState<Character[]>([])
  const [character, setCharacter] = useState<"selectPlayers" | "selectEnemy">(
    "selectPlayers",
  )

  function pushTurn(p: Character) {
    p.alive = true
    setTurnos((prev) => {
      const rpgSelect = prev.some((t) => t.name === p.name)
      if (rpgSelect) return prev
      return [...prev, p]
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <button>Turnos</button>
        {turnos.map((t, i) => {
          return <p key={i}> {t.name}</p>
        })}
      </div>
      <div className={styles.containerInput}>
        <p>Selecione quem batalhara</p>
        {character === "selectPlayers" &&
          players.map((p) => {
            return (
              <div className={styles.containerCharacter} key={p.id}>
                <p
                  style={{
                    color: turnos.find((c) => c.id === p.id) ? "green" : "red",
                  }}
                >
                  {p.name}
                </p>
                <button onClick={() => pushTurn(p)}>Selecione</button>
              </div>
            )
          })}
        {character === "selectEnemy" &&
          enemy.map((e) => {
            return (
              <div className={styles.containerCharacter} key={e.id}>
                <p
                  style={{
                    color: turnos.find((c) => c.name === e.name)
                      ? "green"
                      : "red",
                  }}
                >
                  {e.name}
                </p>
                <button onClick={() => pushTurn(e)}>Selecione</button>
              </div>
            )
          })}
        <button onClick={() => setCharacter("selectEnemy")}>Próximo</button>
      </div>
    </div>
  )
}
