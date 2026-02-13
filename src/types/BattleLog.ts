import { TurnPhase } from "./TurnPhase"

export type BattleAttackLog = {
  type: "attack"
  attackerId: string
  targetId: string
  rollD20: number
  damageRolls: number[]
  baseDamage: number
  finalDamage: number
  defense: number
  hit: boolean
  critical: boolean
}

export type BattleSystemLog = {
  type: "system"
  message: string
  kind: "phase" | "turn" | "round"
  actorId?: string
  phase?: TurnPhase
  turn: number
  round: number
}

export type BattleLog = BattleAttackLog | BattleSystemLog
