import { DiceConfig } from "@/types/DiceConfig"
import { DiceResult } from "@/types/DiceRoll"

export default function dice({
  rolls,
  sides,
  modifier = 0,
}: DiceConfig): DiceResult {
  const results: number[] = []

  for (let i = 0; i < rolls; i++) {
    results.push(Math.floor(Math.random() * sides) + 1)
  }

  const total = results.reduce((acc, r) => acc + r, 0) + modifier

  return {
    rolls: results,
    total,
  }
}
