"use client"

import players from "@/data/rpg/World of Clans/entites/player"
import styles from "./page.module.css"
import { Character } from "@/types/Character"
import { useState } from "react"

export default function CombatPage() {
  const [turnos, setTurnos] = useState<Character[]>([])

  function pushTurn(p: Character) {
    setTurnos((prev) => {
      const jaFoi = prev.some((t) => t.id === p.id)
      if (jaFoi) return prev
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
        <p>Players que batalharam:</p>
        {players.map((p) => {
          return (
            <div key={p.id}>
              <p>{p.name}</p>
              <button onClick={() => pushTurn(p)}>Clica aqui</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
