import styles from "./BattleHeader.module.css"
import { BaseCharacter } from "@/types/BaseCharacter"
import { TurnPhase } from "@/types/TurnPhase"

type BattleHeaderProps = {
  round: number
  turnInRound: number
  totalTurnsInRound: number
  phase: TurnPhase
  current: BaseCharacter | null
}

export function BattleHeader({ round, phase, current }: BattleHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.turn}>{`Rodada: ${round}`}</span>
      <span className={styles.phase}>{`Fase: ${phase}`}</span>
      <span className={styles.current}>{current?.identity.name}</span>
    </div>
  )
}
