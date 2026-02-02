import { Character } from "@/types/Character"
import SwordView from "./weapon/SwordView"
import { Weapons } from "@/types/Weapons"
import { useState } from "react"
import styles from "./SelectAttack.module.css"

type Props = {
  attacker: Character
  onWeaponSelect: (weapon: Weapons) => void
}

export default function SelectAttack({ attacker, onWeaponSelect }: Props) {
  const [attack, setAttack] = useState<"sword" | "magic" | "abilities">("sword")

  const weapons = attacker.backpack?.weapons ?? []

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <button onClick={() => setAttack("sword")}>Espada</button>
        <button onClick={() => setAttack("magic")}>Magia</button>
        <button onClick={() => setAttack("abilities")}>Habilidades</button>
      </div>

      {attack === "sword" && (
        <SwordView weapons={weapons} onConfirm={onWeaponSelect} />
      )}

      {attack === "magic" && null}
      {attack === "abilities" && null}
    </div>
  )
}
