export type Weapons = {
  name: string
  id: number
  weaponType: string
  damage: {
    base: { rolls: number; sides: number; type?: string }[]
  }
  properties: {
    hand: string
    versatile: { rolls: number; sides: number }
    criticalChance: number
  }
  weight: string
  durability: number
  special: string
}
