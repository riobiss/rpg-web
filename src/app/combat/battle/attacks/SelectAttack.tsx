import { Character } from "@/types/Character"
import SwordView from "./weapon/SwordView"
import { Weapons } from "@/types/Weapons"
import { useState } from "react"
import SelectTarget from "./selectTarget/SelectTarget"
import styles from "./SelectAttack.module.css"
import { Button } from "@/components/Button"
type Props = {
  attacker: Character
  characters: Character[]
}
export default function SelectAttack({ attacker, characters }: Props) {
  const [attack, setAttack] = useState<"sword" | "magic" | "abilities">("sword")
  const [attackSelected, setAttackSelected] = useState<Weapons | null>(null)

  const weapons = attacker.backpack?.weapons ?? []

  if (attackSelected) {
    return <SelectTarget characters={characters} />
  }

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <button onClick={() => setAttack("sword")}>Espada</button>
        <button onClick={() => setAttack("magic")}>Magia</button>
        <button onClick={() => setAttack("abilities")}>Habilidades</button>
      </div>

      {attack === "sword" && (
        <SwordView weapons={weapons} onConfirm={setAttackSelected} />
      )}

      {attack === "magic" &&
        /* <MagicView /> */
        null}

      {attack === "abilities" &&
        /* <AbilityView /> */
        null}
    </div>
  )
}
