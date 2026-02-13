import { DiceConfig } from "@/types/DiceConfig"
import { DiceResult } from "@/types/DiceRoll"

function secureRoll(sides: number): number {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)

  const max = 2 ** 32
  const limit = max - (max % sides)

  if (array[0] >= limit) {
    return secureRoll(sides)
  }

  return (array[0] % sides) + 1
}

export default function dice({
  rolls,
  sides,
  modifier = 0,
}: DiceConfig): DiceResult {
  const results: number[] = []

  for (let i = 0; i < rolls; i++) {
    results.push(secureRoll(sides))
  }

  const total = results.reduce((acc, r) => acc + r, 0) + modifier

  return {
    rolls: results,
    total,
  }
}
