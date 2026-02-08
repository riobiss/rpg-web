import { PlayerCharacter } from "@/types/PlayerCharacter"
import weapons from "../weapons"

const players: PlayerCharacter[] = [
  {
    id: "char_001",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/images/characters/image-char-001.jpg",
    identity: {
      name: "Rowan",
      nickname: "",
      kingdom: "Schlemitt",
      race: "humanos",
      class: "ninja",
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
      classMainIds: ["abil_01", "abil_02"],
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
  {
    id: "char_002",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/images/characters/image-char-002.jpeg",

    identity: {
      name: "Mizuki",
      nickname: "",
      kingdom: "Schlemitt",
      race: "humanos",
      class: "samurai",
      classReinforcement: "",
    },

    physical: {
      age: 21,
      heightCm: 167,
      weightKg: 60,
      eyes: "castanhos",
      skin: "branca",
      hair: "negros",
      other: "",
    },

    personal: {
      religion: "",
      language: "",
      defects: "",
    },

    attributes: {
      agility: { base: 18, modifiers: [], total: 18 },
      strength: { base: 15, modifiers: [], total: 15 },
      dexterity: { base: 17, modifiers: [], total: 17 },
      instinct: { base: 7, modifiers: [], total: 7 },
      charisma: { base: 6, modifiers: [], total: 6 },
      knowledge: { base: 7, modifiers: [], total: 7 },
      constitution: { base: 11, modifiers: [], total: 11 },
    },

    defense: {
      base: 0,
      armor: 0,
      shield: 0,
      evasion: 0,
    },

    health: {
      life: 24,
      mana: 28,
      sanity: 10,
      exhaustion: 9,
    },

    state: {
      currentLife: 24,
      currentMana: 28,
      currentSanity: 10,
      currentExhaustion: 9,
    },

    skills: {
      archery: 0,
      crossbow: 0,
      tolerance: 0,
      smallBlades: 0,
      largeBlades: 0,
      fencing: 3,
      staffs: 0,
      warArt: 0,
      athletics: 0,
      acting: 0,
      stealth: 0,
      theft: 0,
      brawl: 0,
      riding: 0,
      navigation: 0,
      intimidate: 0,
      aim: 0,
      persuade: 0,
      observe: 0,
      seduce: 0,
      history: 0,
      acrobatics: 0,
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
      description: "",
    },

    abilities: {
      classMainIds: [],
      classReinforcementIds: [],
      originId: null,
    },

    inventory: [],

    equipment: {
      weaponIds: [],
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
  {
    id: "char_003",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/images/characters/image-char-003.jpeg",

    identity: {
      name: "Brutos Bandeira",
      nickname: "",
      kingdom: "Dolong",
      race: "humanos",
      class: "berserk",
      classReinforcement: "",
    },

    physical: {
      age: 60,
      heightCm: 170,
      weightKg: 60,
      eyes: "verdes",
      skin: "clara",
      hair: "grisalhos",
      other: "",
    },

    personal: {
      religion: "",
      language: "Comum",
      defects: "Ranzinza, Esquecido, Pidão",
    },

    attributes: {
      agility: { base: 10, modifiers: [], total: 10 },
      strength: { base: 23, modifiers: [], total: 23 },
      dexterity: { base: 18, modifiers: [], total: 18 },
      instinct: { base: 13, modifiers: [], total: 13 },
      charisma: { base: 12, modifiers: [], total: 12 },
      knowledge: { base: 7, modifiers: [], total: 7 },
      constitution: { base: 18, modifiers: [], total: 18 },
    },

    defense: {
      base: 0,
      armor: 0,
      shield: 0,
      evasion: 8,
    },

    health: {
      life: 30,
      mana: 20,
      sanity: 10,
      exhaustion: 9,
    },

    state: {
      currentLife: 30,
      currentMana: 20,
      currentSanity: 10,
      currentExhaustion: 9,
    },

    skills: {
      archery: 0,
      crossbow: 0,
      tolerance: 4,
      smallBlades: 0,
      largeBlades: 0,
      fencing: 0,
      staffs: 0,
      warArt: 0,
      athletics: 2,
      acting: 0,
      stealth: 0,
      theft: 0,
      brawl: 0,
      riding: 0,
      navigation: 0,
      intimidate: 10,
      aim: 0,
      persuade: 0,
      observe: 0,
      seduce: 0,
      history: 0,
      acrobatics: 0,
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
        "Quando falha em um teste de Atributo, pode rerrolar uma vez por sessão, aceitando o novo resultado.",
    },

    abilities: {
      classMainIds: [
        "berserk_golpe_ensanguentado",
        "berserk_palma_da_destruicao",
      ],
      classReinforcementIds: [],
      originId: "origem_sobrevivente",
    },

    inventory: [
      {
        id: "item_01",
        name: "Livro",
        rarity: "comum",
        quantity: 1,
        description:
          "Livro de capa dura com 320 páginas, encadernado em couro marrom com letras douradas na lombada.",
        ability: null,
      },
      {
        id: "item_02",
        name: "Saco de dormir",
        rarity: "comum",
        description:
          "Saco de dormir de lã grossa, com capuz e fechamento por corda de couro.",
        ability: null,
        quantity: 1,
      },
    ],

    equipment: {
      weaponIds: [],
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
