import { AttributeKey } from "./Attribute"

export type Armor = {
  id: string
  name: string
  rarity: string

  baseDefense: number
  baseResistance: number
  stealthPenalty: number

  body: "head" | "torso" | "legs" | "full"
  weight: number

  attributeScaling?: AttributeKey[]
  abilityIds: string[]
}
