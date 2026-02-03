export type BattleLog = {
  attackerId: number
  targetId: number
  rollD20: number
  damageRolls: number[]
  baseDamage: number
  finalDamage: number
  defense: number
  hit: boolean
  critical: boolean
}
