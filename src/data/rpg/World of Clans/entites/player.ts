import { Character } from "@/types/Character"
import weapons from "../weapons"
const players: Character[] = [
  {
    id: 1,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 0,
    name: "Cristo",
    health: 70,
    damage: {
      rolls: 4,
      sides: 12,
    },
    defense: 10,
    backpack: {
      weapons: [weapons[0]],
    },
  },
  {
    id: 2,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 0,
    name: "Jonas",
    health: 50,
    damage: {
      rolls: 1,
      sides: 18,
    },
    defense: 3,
    backpack: {
      weapons: [weapons[2], weapons[3]],
    },
  },
  {
    id: 3,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 0,
    name: "Jales",
    health: 60,
    damage: {
      rolls: 1,
      sides: 14,
    },
    defense: 7,
    backpack: {
      weapons: [weapons[1]],
    },
  },
]
export default players
