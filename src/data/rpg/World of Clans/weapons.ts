import { Weapon } from "@/types/Weapon"

const weapons: Weapon[] = [
  {
    id: "sword_short_iron",
    name: "Espada Curta de Ferro",
    rarity: "common",
    damage: {
      rolls: 10,
      sides: 6,
      type: "physical",
    },
    attributeScaling: ["strength", "dexterity"],
    range: "melee",
    proficiency: "smallBlades",
    weight: 2,
    tags: ["sharp", "light"],
    abilityIds: [],
  },

  {
    id: "sword_long_steel",
    name: "Espada Longa de Aço",
    rarity: "uncommon",

    damage: {
      rolls: 1,
      sides: 8,
      type: "physical",
    },

    attributeScaling: ["strength"],
    range: "melee",
    proficiency: "largeBlades",

    weight: 4,
    tags: ["sharp", "balanced"],

    abilityIds: ["powerStrike"],
  },

  {
    id: "sword_shadow_katana",
    name: "Katana da Sombra",
    rarity: "rare",

    damage: {
      rolls: 10,
      sides: 6,
      type: "physical",
    },

    attributeScaling: ["dexterity", "agility"],
    range: "melee",
    proficiency: "largeBlades",
    weight: 3,
    tags: ["sharp", "light", "shadow"],
    abilityIds: ["bleedingCut", "shadowSlash"],
  },
]

export default weapons
