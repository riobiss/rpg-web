import { AbilityGroups } from "./AbilityGroup"
import { BaseCharacter } from "./BaseCharacter"
import { Magic } from "./Magic"

export type CombatCharacter = BaseCharacter & {
  id: string
  equipment: {
    weaponIds: string[]
  }
  abilities?: AbilityGroups
  magics?: Magic[]
}
