export type Inventory = {
  id: string
  name: string
  rarity: "comum" | "incomum" | "raro" | "legendary" | "epic" | "secret"
  description: string
  ability: string | null
  quantity: number
  equipped?: boolean
}
