import SwordView from "./weapon/SwordView"
import { Weapon } from "@/types/Weapon"
import { useState } from "react"
import styles from "./SelectAttack.module.css"
import { BaseCharacter } from "@/types/BaseCharacter"
import { Ability } from "@/types/Ability"
import AbilityView from "./ability/AbilityView"

type Props = {
  attacker: BaseCharacter
  weapons: Weapon[]
  abilities: Ability[]
  onWeaponSelect: (weapon: Weapon) => void
  onAbilitySelect?: (ability: Ability) => void
}

export default function SelectAttack({
  weapons,
  abilities,
  onWeaponSelect,
  onAbilitySelect,
}: Props) {
  const [attack, setAttack] = useState<"sword" | "magic" | "abilities">("sword")

  function handleAbilitySelect(ability: Ability) {
    onAbilitySelect?.(ability)
  }

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
      {attack === "abilities" && (
        <AbilityView abilities={abilities} onConfirm={handleAbilitySelect} />
      )}
    </div>
  )
}
