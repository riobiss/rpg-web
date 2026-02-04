import { Defense } from "./Defense"

export type BaseCharacter = {
  id: string
  identity: {
    name: string
  }

  defense: Defense

  health: {
    life: number
  }

  state: {
    currentLife: number
  }
  equipment: {
    weaponIds: string[]
  }

  meta: {
    isNPC: boolean
  }
}
