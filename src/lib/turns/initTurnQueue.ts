import type { Turn } from "../../types/Turn"
import { PlayerCharacter } from "@/types/PlayerCharacter"

export default function initTurnQueue(characters: PlayerCharacter[]): Turn[] {
  return characters.filter((c) => c.status.alive).map((c) => ({ entity: c }))
}
