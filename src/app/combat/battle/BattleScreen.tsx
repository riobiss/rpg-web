"use client"

import { Character } from "@/types/Character"
import { BattleHeader } from "./battleHeader/BattleHeader"
import styles from "./Battle.module.css"
import SelectAttack from "./attacks/SelectAttack"
type Props = {
  characters: Character[]
}
export default function BattleScreen({ characters }: Props) {
  const turn = 2
  const phase = "acao"
  const attacker = characters[0]
  return (
    <div className={styles.container}>
      <BattleHeader turn={turn} phase={phase} current={characters[0]} />
      <SelectAttack attacker={attacker} characters={characters} />
    </div>
  )
}
