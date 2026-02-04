import { AttributeKey } from "./Attribute"

export type Weapon = {
  id: string
  name: string
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary"
  damage: {
    rolls: number
    sides: number
    type: "physical" | "magic" | "true"
  }

  attributeScaling: AttributeKey[]
  range: "melee" | "short" | "long"
  proficiency: string
  weight: number
  tags: string[]
  abilityIds: string[]
}
