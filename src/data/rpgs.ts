import players from "./rpg/World of Clans/entites/player"
import races from "./rpg/World of Clans/races"
import rpgWoc from "./rpg/World of Clans/rpg"
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
