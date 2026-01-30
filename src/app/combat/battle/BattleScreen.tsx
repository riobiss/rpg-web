"use client"

import { useState } from "react"
import { Character } from "@/types/Character"
import { BattleHeader } from "./battleHeader/BattleHeader"
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
          <Button onClick={() => setAttack("sword")}>Espada</Button>
          <Button onClick={() => setAttack("magic")}>Magia</Button>
          <Button onClick={() => setAttack("abilities")}>Habilidades</Button>
        </div>
      ) : null}
      <SelectAttack attack={attack} character={characters[0]} />
    </div>
  )
}
