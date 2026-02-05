"use client"

import styles from "./Battle.module.css"
import SelectAttack from "./attacks/SelectAttack"
import SelectTarget from "./attacks/selectTarget/SelectTarget"
import { Weapon } from "@/types/Weapon"
import { useState } from "react"
import { BattleLog } from "@/types/BattleLog"
import BattleLogs from "./battleLog/BattleLogs"
import applyDamageWeapon from "@/lib/applyDamage/applyDamageWeapon"
import weapons from "@/data/rpg/World of Clans/weapons"
import { BaseCharacter } from "@/types/BaseCharacter"

type Props = {
  characters: BaseCharacter[]
}

export default function BattleScreen({ characters }: Props) {
  const [battleCharacters, setBattleCharacters] =
    useState<BaseCharacter[]>(characters)
  const [weapon, setWeapon] = useState<Weapon | null>(null)
  const [logs, setLogs] = useState<BattleLog[]>([])

  const attacker = battleCharacters[0]

  const attackerWeapons = weapons.filter((w) =>
    attacker.equipment.weaponIds.includes(w.id),
  )

  function handleAttack(target: BaseCharacter) {
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
        <SelectAttack
          attacker={attacker}
          weapons={attackerWeapons}
          onWeaponSelect={setWeapon}
        />
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
