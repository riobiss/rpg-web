"use client"

import { useState } from "react"
import SelectCharacter from "./setup/SelectCharacter"
import BattleScreen from "./battle/BattleController"
import { Character } from "@/types/Character"

export default function CombatPage() {
  const [characters, setCharacters] = useState<Character[] | null>(null)

  if (!characters) {
    return <SelectCharacter onConfirm={setCharacters} />
  }
  return <BattleScreen characters={characters} />
}
