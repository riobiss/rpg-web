import type { Turn } from "../../types/Turn"
import { Character } from "@/types/Character"

export default function initTurnQueue(characters: Character[]): Turn[] {
  return characters
    .filter((c) => c.alive)
    .map((c) => ({ entity: c }))
    .sort((a, b) => b.entity.initiative - a.entity.initiative)
}
