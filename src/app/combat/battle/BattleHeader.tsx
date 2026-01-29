import styles from "./Battle.module.css"
import { Character } from "@/types/Character"

type BattleHeaderProps = {
  turn: number
  phase: "selecionar" | "acao" | "resolver"
  current: Character | null
}

export function BattleHeader({ turn, phase, current }: BattleHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.turn}>{`Turno: ${turn}`}</span>
      <span className={styles.phase}>{`Fase: ${phase}`}</span>
      <span className={styles.current}>{current?.name}</span>
      <span className={styles.activeBadge}>ATIVO</span>
    </div>
  )
}
