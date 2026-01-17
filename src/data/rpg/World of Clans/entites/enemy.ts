import shields from "../shields"
import weapons from "../weapons"
const enemy = [
  {
    alive: false,
    initiative: 5,
    name: "Goblin",
    damage: { rolls: 1, sides: 12 },
    health: 10,
    defense: 4,
    backpack: {
      weapons: [weapons[0]],
      shield: [shields[0]],
    },
  },
  {
    alive: false,
    initiative: 1,
    name: "Ogro",
    damage: { rolls: 1, sides: 18 },
    health: 100,
    defense: 10,
    backpack: {
      weapons: [weapons[1]],
      shield: [shields[1]],
    },
  },
  {
    alive: false,
    initiative: 0,
    name: "Golem",
    damage: { rolls: 1, sides: 14 },
    health: 80,
    defense: 15,
    backpack: {
      weapons: [weapons[2]],
      shield: [shields[2]],
    },
  },
]
export default enemy
