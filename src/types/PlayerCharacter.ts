import { Attribute, AttributeKey } from "./Attribute"
import { BaseCharacter } from "./BaseCharacter"
import { Inventory } from "./Invetory"
import { Skill } from "./Skill"

export type PlayerCharacter = BaseCharacter & {
  id: string
  createdAt: Date
  updatedAt: Date

  identity: {
    name: string
    nickname: string
    kingdom: string
    race: string
    class: string
    classReinforcement: string
  }

  physical: {
    age: number
    heightCm: number
    weightKg: number
    eyes: string
    skin: string
    hair: string
    other: string
  }

  personal: {
    religion: string
    language: string
    defects: string
  }

  attributes: Record<AttributeKey, Attribute>

  defense: {
    base: number
    armor: number
    shield: number
    evasion: number
  }

  health: {
    life: number
    mana: number
    sanity: number
    exhaustion: number
  }

  skills: Skill

  ancestry: {
    description: string
  }

  abilities: {
    classMainIds: string[]
    classReinforcementIds: string[]
    originId: string | null
  }

  inventory: Inventory[]

  equipment: {
    weaponIds: string[]
    shieldId: string | null
    armorId: string | null
  }

  progression: {
    level: number
    xp: number
    xpToNextLevel: number
  }

  state: {
    currentLife: number
    currentMana: number
    currentSanity: number
    currentExhaustion: number
    //statusEffects: StatusEffect[]
  }

  meta: {
    isNPC: boolean
    isEditable: boolean
    version: number
  }
}
