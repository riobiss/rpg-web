"use client"

import { Character } from "@/types/Character"
import styles from "./Battle.module.css"
import SelectAttack from "./attacks/SelectAttack"
import SelectTarget from "./attacks/selectTarget/SelectTarget"
import { Weapons } from "@/types/Weapons"
import { useState } from "react"
import applyDamageWeapon from "./attacks/applyDamage/applyDamageWeapon"
import { BattleLog } from "@/types/BattleLog"
import BattleLogs from "./battleLog/BattleLogs"

type Props = {
  characters: Character[]
}

export default function BattleScreen({ characters }: Props) {
  const [battleCharacters, setBattleCharacters] =
    useState<Character[]>(characters)
  const [weapon, setWeapon] = useState<Weapons | null>(null)
  const [logs, setLogs] = useState<BattleLog[]>([])

  const attacker = battleCharacters[0]

  function handleAttack(target: Character) {
    if (!weapon) return

    const result = applyDamageWeapon(attacker, target, weapon)

    setBattleCharacters((prev) =>
      prev.map((c) =>
        c.id === result.updatedTarget.id ? result.updatedTarget : c,
      ),
    )

    setLogs((prev) => [...prev, result.log])

    setWeapon(null)
  }

  return (
    <div className={styles.container}>
      {!weapon && (
        <SelectAttack attacker={attacker} onWeaponSelect={setWeapon} />
      )}

      {weapon && (
        <SelectTarget
          characters={battleCharacters.filter((c) => c.id !== attacker.id)}
          onSelect={handleAttack}
        />
      )}
      <BattleLogs logs={logs} />
    </div>
  )
}
