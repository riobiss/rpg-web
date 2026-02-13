import { BaseCharacter } from "./BaseCharacter"
import { BattleAttackLog } from "./BattleLog"

export type DamageResult = {
  updatedTarget: BaseCharacter
  log: BattleAttackLog
}
