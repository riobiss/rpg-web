import { MonsterCharacter } from "@/types/MonsterCharacter"
import weapons from "../weapons"

const monsterCharacter: MonsterCharacter[] = [
  {
    id: "monst_5001",
    identity: {
      name: "Goblin",
    },

    meta: {
      isNPC: true,
    },

    level: 1,
    xp: 0,
    alive: false,
    initiative: 5,

    damage: {
      rolls: 1,
      sides: 12,
    },
    health: {
      life: 60,
    },
    defense: {
      base: 5,
      evasion: 0,
      armor: 0,
      shield: 0,
    },
    state: {
      currentLife: 60,
    },
    equipment: {
      weaponIds: [weapons[0].id],
    },
  },
  {
    id: "monst_5002",

    identity: {
      name: "Ogro",
    },

    meta: {
      isNPC: true,
    },

    level: 1,
    xp: 0,
    alive: false,
    initiative: 1,

    damage: {
      rolls: 1,
      sides: 18,
    },
    health: {
      life: 100,
    },
    defense: {
      base: 10,
      evasion: 0,
      armor: 0,
      shield: 0,
    },
    state: {
      currentLife: 100,
    },
    equipment: {
      weaponIds: [weapons[1].id],
    },
  },

  {
    id: "monst_03",

    identity: {
      name: "Golem",
    },

    meta: {
      isNPC: true,
    },

    level: 1,
    xp: 0,
    alive: false,
    initiative: 3,

    damage: {
      rolls: 1,
      sides: 14,
    },
    health: {
      life: 80,
    },
    defense: {
      base: 15,
      evasion: 0,
      armor: 0,
      shield: 0,
    },
    state: {
      currentLife: 60,
    },
    equipment: {
      weaponIds: [weapons[2].id],
    },
  },
]

export default monsterCharacter
