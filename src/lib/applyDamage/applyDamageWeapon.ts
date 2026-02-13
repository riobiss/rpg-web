import dice from "@/lib/dice/dice"
import { DamageResult } from "@/types/DamageResult"
import { Weapon } from "@/types/Weapon"
import { BaseCharacter } from "@/types/BaseCharacter"

function getDefenseValues(defense: BaseCharacter["defense"]) {
  return {
    evasion: defense.evasion,
    totalArmor: defense.base + defense.armor + defense.shield,
  }
}

export default function applyDamageWeapon(
  attacker: BaseCharacter,
  target: BaseCharacter,
  weapon: Weapon,
): DamageResult {
  const damageResult = dice({
    rolls: weapon.damage.rolls,
    sides: weapon.damage.sides,
  })

  const baseDamage = damageResult.total
  const damageRolls = damageResult.rolls

  const { total: rollD20 } = dice({ rolls: 1, sides: 20 })

  const { evasion, totalArmor } = getDefenseValues(target.defense)

  const hit = rollD20 >= evasion
  const critical = rollD20 === 20

  const effectiveDefense = weapon.damage.type === "true" ? 0 : totalArmor

  const rawDamage = hit ? (critical ? baseDamage * 2 : baseDamage) : 0
  const finalDamage = hit ? Math.max(rawDamage - effectiveDefense, 0) : 0
  const updatedTarget: BaseCharacter = {
    ...target,
    state: {
      ...target.state,
      currentLife: Math.max(target.state.currentLife - finalDamage, 0),
    },
  }

  return {
    updatedTarget,
    log: {
      type: "attack",
      attackerId: attacker.id,
      targetId: target.id,
      rollD20,
      damageRolls,
      baseDamage,
      finalDamage,
      defense: effectiveDefense,
      hit,
      critical,
    },
  }
}
