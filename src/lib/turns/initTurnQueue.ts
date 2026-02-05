import type { Turn } from "../../types/Turn"
import { BaseCharacter } from "@/types/BaseCharacter"

export default function initTurnQueue(characters: BaseCharacter[]): Turn[] {
  return characters
    .filter((c) => c.state.currentLife > 0)
    .map((c) => ({ entity: c }))
}
