import { Characters } from "./Characters"

export type DamageResult = {
  target: Characters
  roll: number
  effectiveDamage: number
  diceRolls: number | number[]
}
