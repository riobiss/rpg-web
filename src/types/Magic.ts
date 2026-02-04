import { AttributeKey } from "./Attribute"

export type Magic = {
  id: string
  name: string
  school: string
  cost: {
    mana: number
  }
  cooldown?: number
  scaling: AttributeKey[]
  effects: string[]
}
