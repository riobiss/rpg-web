export type BattleLog = {
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
