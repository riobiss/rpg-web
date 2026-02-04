"use client"

import { useState } from "react"
import SelectCharacter from "./setup/SelectCharacter"
import BattleScreen from "./battle/BattleController"
import { BaseCharacter } from "@/types/BaseCharacter"

export default function CombatPage() {
  const [characters, setCharacters] = useState<BaseCharacter[] | null>(null)

  if (!characters) {
    return <SelectCharacter onConfirm={setCharacters} />
  }
  return <BattleScreen characters={characters} />
}
