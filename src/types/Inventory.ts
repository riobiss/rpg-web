export type Inventory = {
  name: string
  rarity: "comum" | "incomum" | "raro" | "lendário"
  description: string
  ability: string | null
  id: string
  quantity: number
  equipped?: boolean
}
