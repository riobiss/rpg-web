import { Races } from "./races"

export type Rpg = {
  id: number
  image: string
  name: string
  master: string
  description: string
  races: Races
}
