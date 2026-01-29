import type { Shields } from "./Shields"
import type { Weapons } from "./Weapons"

export type Character = {
  id: number
  level: number
  xp: number
  alive: boolean
  initiative: number
  name: string
  health: number
  damage: {
    rolls: number
    sides: number
  }
  defense: number
  backpack?: {
    weapons?: Weapons[]
    shields?: Shields[]
  }
}
