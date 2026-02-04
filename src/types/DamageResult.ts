import { BaseCharacter } from "./BaseCharacter"

export type DamageResult = {
  updatedTarget: BaseCharacter
  log: {
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
}
