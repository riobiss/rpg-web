"use client"

import { useState } from "react"
import SelectCharacter from "./setup/SelectCharacter"
import styles from "./page.module.css"
import { Character } from "@/types/Character"

export default function CombatPage() {
  const [confirmedCharacters, setConfirmedCharacters] = useState<
    Character[] | null
  >(null)

  return (
    <div className={styles.container}>
      <h2>Campo de batalha</h2>

      {!confirmedCharacters ? (
        <SelectCharacter onConfirm={setConfirmedCharacters} />
      ) : (
        <div>
          <h3>Combate iniciado</h3>

          <ul>
            {confirmedCharacters.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>

          {/* aqui entra o layout real de combate */}
        </div>
      )}
    </div>
  )
}
