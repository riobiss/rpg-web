import { PlayerCharacter } from "@/types/PlayerCharacter"
import weapons from "../weapons"

const players: PlayerCharacter[] = [
  {
    id: "char_001",
    createdAt: new Date(),
    updatedAt: new Date(),
    identity: {
      name: "Rowan",
      nickname: "",
      kingdom: "Schlemitt",
      race: "Humano",
      class: "Ninja",
      classReinforcement: "",
    },
    physical: {
      age: 22,
      heightCm: 185,
      weightKg: 72,
      eyes: "preto",
      skin: "preto",
      hair: "preto",
      other: "",
    },
    personal: {
      religion: "",
      language: "",
      defects: "",
    },
    attributes: {
      agility: { base: 12, modifiers: [3, 1], total: 16 },
      strength: { base: 8, modifiers: [1, 1], total: 10 },
      dexterity: { base: 16, modifiers: [2, 1], total: 19 },
      instinct: { base: 12, modifiers: [1, 1], total: 14 },
      charisma: { base: 8, modifiers: [1], total: 9 },
      knowledge: { base: 12, modifiers: [1], total: 13 },
      constitution: { base: 12, modifiers: [1, 1], total: 14 },
    },
    defense: {
      base: 10,
      armor: 0,
      shield: 0,
      evasion: 10,
    },
    health: {
      life: 34,
      mana: 25,
      sanity: 10,
      exhaustion: 9,
    },
    state: {
      currentLife: 34,
      currentMana: 25,
      currentSanity: 10,
      currentExhaustion: 9,
    },
    skills: {
      archery: 0,
      crossbow: 0,
      tolerance: 0,
      smallBlades: 0,
      largeBlades: 0,
      fencing: 0,
      staffs: 0,
      warArt: 0,
      athletics: 3,
      acting: 0,
      stealth: 3,
      theft: 0,
      brawl: 0,
      riding: 0,
      navigation: 0,
      intimidate: 0,
      aim: 0,
      persuade: 0,
      observe: 2,
      seduce: 0,
      history: 0,
      acrobatics: 2,
      arcanism: 0,
      alchemy: 0,
      spellcasting: 0,
      magicResistance: 0,
      religion: 0,
      nature: 0,
      medicine: 0,
      gambling: 0,
    },
    ancestry: {
      description:
        "Quando falha em um teste de atributo, pode rerrolar uma vez por sessão.",
    },
    abilities: {
      classMainIds: [],
      classReinforcementIds: [],
      originId: null,
    },
    inventory: [],

    equipment: {
      weaponIds: [weapons[0].id],
      shieldId: null,
      armorId: null,
    },
    progression: {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
    },
    meta: {
      isNPC: false,
      isEditable: true,
      version: 1,
    },
  },
]

export default players
