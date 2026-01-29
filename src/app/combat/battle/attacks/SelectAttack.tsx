import styles from "./SelectAttack.module.css"
import { Character } from "@/types/Character"
import SwordView from "./weapon/SwordView"

type Props = {
  attack: string | null
  character: Character
}

export default function SelectAttack({ attack, character }: Props) {
  const weapons = character.backpack?.weapons ?? []
  if (attack === "sword") {
    return <SwordView weapons={weapons}  />
  }

  return null
}
