import { Weapon } from "./Weapon"
import { Ability } from "./Ability"
import { Magic } from "./Magic"

export type SelectedAction =
  | { kind: "weapon"; weapon: Weapon }
  | { kind: "ability"; ability: Ability }
  | { kind: "magic"; magic: Magic }
  | null
