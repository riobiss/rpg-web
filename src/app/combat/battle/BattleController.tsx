"use client"

import styles from "./Battle.module.css"
import SelectAttack from "./attacks/SelectAttack"
import SelectTarget from "./attacks/select-target/SelectTarget"
import { Weapon } from "@/types/Weapon"
import { useState } from "react"
import { BattleLog } from "@/types/BattleLog"
import BattleLogs from "./battle-log/BattleLogs"
import applyDamageWeapon from "@/lib/applyDamage/applyDamageWeapon"
import weapons from "@/data/rpg/world-of-clans/weapons"
import { BaseCharacter } from "@/types/BaseCharacter"
import { classes } from "@/data/rpg/world-of-clans/classes"
import { Ability } from "@/types/Ability"

type Props = {
  characters: BaseCharacter[]
}

type CharacterWithAbilities = BaseCharacter & {
  identity: BaseCharacter["identity"] & {
    class?: string
  }
  abilities?: {
    classMainIds?: string[]
    classReinforcementIds?: string[]
  }
}

function getCharacterOwnedAbilities(character: BaseCharacter): Ability[] {
  const characterWithAbilities = character as CharacterWithAbilities
  const classKey = characterWithAbilities.identity.class

  if (!classKey) return []

  const classData =
    classes.find((c) => c.id === classKey || c.name === classKey) ??
    classes.find((c) => {
      const idKey = c.id
      const nameKey = c.name

      return (
        idKey.startsWith(classKey) ||
        classKey.startsWith(idKey) ||
        nameKey.startsWith(classKey) ||
        classKey.startsWith(nameKey)
      )
    })

  if (!classData) return []

  const abilityIds = new Set([
    ...(characterWithAbilities.abilities?.classMainIds ?? []),
    ...(characterWithAbilities.abilities?.classReinforcementIds ?? []),
  ])

  return classData.abilities.filter((ability) => abilityIds.has(ability.id))
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
  const attackerAbilities = getCharacterOwnedAbilities(attacker)

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
          abilities={attackerAbilities}
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
