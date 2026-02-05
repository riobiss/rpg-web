import { BaseCharacter } from "./BaseCharacter"

export type MonsterCharacter = BaseCharacter & {
  level: number
  image?: string
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
