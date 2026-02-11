export type Inventory = {
  name: string
  rarity: "comum" | "incomum" | "raro" | "legendary" | "epic"
  description: string
  ability: string | null
  id: string
  quantity: number
  equipped?: boolean
}
