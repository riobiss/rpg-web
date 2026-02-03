import dice from "@/lib/dice/dice"
import { Character } from "@/types/Character"
import { DamageResult } from "@/types/DamageResult"
import { Weapons } from "@/types/Weapons"

export default function applyDamageWeapon(
  attacker: Character,
  target: Character,
  weapon: Weapons,
): DamageResult {
  const damageRolls: number[] = []
  let baseDamage = 0

  for (const d of weapon.damage.base) {
    const result = dice({ rolls: d.rolls, sides: d.sides })
    damageRolls.push(...result.rolls)
    baseDamage += result.total
  }

  const d20 = dice({ rolls: 1, sides: 20 })
  const rollD20 = d20.total

  const hit = rollD20 >= 14
  const critical = rollD20 === 20

  const rawDamage = hit ? (critical ? baseDamage * 2 : baseDamage) : 0

  const finalDamage = hit ? Math.max(rawDamage - target.defense, 0) : 0

  return {
    updatedTarget: {
      ...target,
      health: Math.max(target.health - finalDamage, 0),
    },
    log: {
      attackerId: attacker.id,
      targetId: target.id,
      rollD20,
      damageRolls,
      baseDamage, 
      finalDamage, 
      defense: target.defense,
      hit,
      critical,
    },
  }
}
