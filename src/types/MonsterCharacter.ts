import { BaseCharacter } from "./BaseCharacter"
import { Defense } from "./Defense"

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
  defense: Defense

  equipment: {
    weaponIds: string[]
  }
}
