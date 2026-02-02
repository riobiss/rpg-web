"use client"

import { Character } from "@/types/Character"
import { BattleHeader } from "./battleHeader/BattleHeader"
import styles from "./Battle.module.css"
import SelectAttack from "./attacks/SelectAttack"
import SelectTarget from "./attacks/selectTarget/SelectTarget"
import { Weapons } from "@/types/Weapons"
import { useState } from "react"
import applyDamageWeapon from "./attacks/applyDamage/applyDamageWeapon"

type Props = {
  characters: Character[]
}

export default function BattleScreen({ characters }: Props) {
  const [battleCharacters, setBattleCharacters] =
    useState<Character[]>(characters)

  const [weapon, setWeapon] = useState<Weapons | null>(null)

  const attacker = battleCharacters[0]

  function handleAttack(target: Character) {
    if (!weapon) return

    const result = applyDamageWeapon(target, weapon)

    setBattleCharacters((prev) =>
      prev.map((c) =>
        c.id === result.updatedTarget.id ? result.updatedTarget : c,
      ),
    )

    setWeapon(null)
  }

  return (
    <>
      {!weapon && (
        <SelectAttack attacker={attacker} onWeaponSelect={setWeapon} />
      )}

      {weapon && (
        <SelectTarget
          characters={battleCharacters.filter((c) => c.id !== attacker.id)}
          onSelect={handleAttack}
        />
      )}
    </>
  )
}
