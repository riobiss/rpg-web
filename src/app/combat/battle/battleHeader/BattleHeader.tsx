import styles from "./BattleHeader.module.css"
import { BaseCharacter } from "@/types/BaseCharacter"

type BattleHeaderProps = {
  turn: number
  phase: "selecionar" | "acao" | "resolver"
  current: BaseCharacter | null
}

export function BattleHeader({ turn, phase, current }: BattleHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.turn}>{`Turno: ${turn}`}</span>
      <span className={styles.phase}>{`Fase: ${phase}`}</span>
      <span className={styles.current}>{current?.identity.name}</span>
      <span className={styles.activeBadge}>ATIVO</span>
    </div>
  )
}
