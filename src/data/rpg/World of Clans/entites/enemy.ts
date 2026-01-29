import { Character } from "@/types/Character"
import shields from "../shields"
import weapons from "../weapons"
const enemy: Character[] = [
  {
    id: 5001,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 5,
    name: "Goblin",
    damage: { rolls: 1, sides: 12 },
    health: 10,
    defense: 4,
    backpack: {
      weapons: [weapons[0]],
      shields: [shields[0]],
    },
  },
  {
    id: 5002,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 1,
    name: "Ogro",
    damage: { rolls: 1, sides: 18 },
    health: 100,
    defense: 10,
    backpack: {
      weapons: [weapons[1]],
      shields: [shields[1]],
    },
  },
  {
    id: 5003,
    level: 1,
    xp: 0,
    alive: false,
    initiative: 3,
    name: "Golem",
    damage: { rolls: 1, sides: 14 },
    health: 80,
    defense: 15,
    backpack: {
      weapons: [weapons[2]],
      shields: [shields[2]],
    },
  },
]
export default enemy
