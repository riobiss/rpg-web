import SwordView from "./weapon/SwordView"
import { Weapon } from "@/types/Weapon"
import { useState } from "react"
import styles from "./SelectAttack.module.css"
import { BaseCharacter } from "@/types/BaseCharacter"

type Props = {
  attacker: BaseCharacter
  weapons: Weapon[]
  onWeaponSelect: (weapon: Weapon) => void
}

export default function SelectAttack({
  weapons,
  onWeaponSelect,
}: Props) {
  const [attack, setAttack] = useState<"sword" | "magic" | "abilities">("sword")

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
