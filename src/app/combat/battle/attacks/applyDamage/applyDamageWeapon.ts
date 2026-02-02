import dice from "@/lib/dice/dice"
import { Character } from "@/types/Character"
import { Weapons } from "@/types/Weapons"

type DamageResult = {
  updatedTarget: Character
  roll: number
  diceRolls: number[]
  damage: number
  isCritical: boolean
  hit: boolean
}

export default function applyDamageWeapon(
  target: Character,
  weapon: Weapons,
): DamageResult {
  const diceRolls: number[] = []
  let weaponDamage = 0

  for (const d of weapon.damage.base) {
    const result = dice({ rolls: d.rolls, sides: d.sides })
    diceRolls.push(result)
    weaponDamage += result
  }

  const roll = dice({ rolls: 1, sides: 20 })

  if (roll < 14) {
    return {
      updatedTarget: target,
      roll,
      diceRolls,
      damage: 0,
      isCritical: false,
      hit: false,
    }
  }

  const isCritical = roll === 20
  const finalWeaponDamage = isCritical ? weaponDamage * 2 : weaponDamage
  const damage = Math.max(finalWeaponDamage - target.defense, 0)

  return {
    updatedTarget: {
      ...target,
      health: Math.max(target.health - damage, 0),
    },
    roll,
    diceRolls,
    damage,
    isCritical,
    hit: true,
  }
}
