import { AttributeKey } from "./Attribute"

export type Ability = {
  id: string
  name: string
  source: "class" | "origin" | "item"

  cost?: {
    mana?: number
    stamina?: number
    sanity?: number
  }

  cooldown?: number

  scaling?: AttributeKey[]
  description: string
}
