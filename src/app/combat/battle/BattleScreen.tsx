"use client"

import { useState } from "react"
import { Character } from "@/types/Character"
import { BattleHeader } from "./BattleHeader"
import styles from "./Battle.module.css"
import { Button } from "@/components/Button"
import SelectAttack from "./attacks/SelectAttack"
type Props = {
  characters: Character[]
}
export default function BattleScreen({ characters }: Props) {
  const [attack, setAttack] = useState<string | null>(null)
  const turn = 2
  const phase = "acao"
  return (
    <div className={styles.container}>
      <BattleHeader turn={turn} phase={phase} current={characters[0]} />
      {phase === "acao" ? (
        <div className={styles.actionButtons}>
          <button onClick={() => setAttack("punch")}>Soco</button>
          <button onClick={() => setAttack("sword")}>Espada</button>
          <button onClick={() => setAttack("magic")}>Magia</button>
          <button onClick={() => setAttack("abilities")}>Habilidades</button>
        </div>
      ) : null}
      <SelectAttack attack={attack} character={characters[0]} />
    </div>
  )
}
