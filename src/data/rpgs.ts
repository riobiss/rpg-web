import players from "./rpg/world-of-clans/entities/player"
import races from "./rpg/world-of-clans/races"
import rpgWoc from "./rpg/world-of-clans/rpg"
const rpg = [
  {
    id: 1,
    image: rpgWoc.image,
    name: rpgWoc.name,
    master: rpgWoc.master,
    description: rpgWoc.description,
    races: races,
    charactersData: players,
  },
  {
    id: 2,
    image: "/images/bg-mine.png",
    name: "Rpg Minecraft",
    master: "João vitor",
    description: "Minezão dos crias porra",
  },
]
export default rpg

