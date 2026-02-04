import { BaseCharacter } from "./BaseCharacter"

export type MonsterCharacter = BaseCharacter & {
  level: number
  xp: number
  alive: boolean
  initiative: number

  damage: {
    rolls: number
    sides: number
  }

  equipment: {
    weaponIds: string[]
  }
}
