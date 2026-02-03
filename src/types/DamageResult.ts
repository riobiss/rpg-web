import { Character } from "./Character"
import { BattleLog } from "./BattleLog"

export type DamageResult = {
  updatedTarget: Character
  log: BattleLog
}
