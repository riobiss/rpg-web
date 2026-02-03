"use client"

import { BattleLog } from "@/types/BattleLog"
import styles from "./BattleLogs.module.css"
import { useEffect, useRef } from "react"

type Props = {
  logs: BattleLog[]
}

export default function BattleLogs({ logs }: Props) {
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [logs])

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Logs</h4>

      <ul ref={listRef} className={styles.list}>
        {logs.map((log, index) => {
          const resultClass = !log.hit
            ? styles.miss
            : log.critical
              ? styles.critical
              : styles.hit

          return (
            <li key={index} className={styles.logItem}>
              <div className={styles.header}>
                Ataque #{index + 1} — {log.attackerId} → {log.targetId}
              </div>

              <div className={styles.details}>
                d20: <strong>{log.rollD20}</strong> | Dados: [
                {log.damageRolls.join(", ")}]
              </div>

              <div className={`${styles.result} ${resultClass}`}>
                {!log.hit ? "ERROU" : `DANO: ${log.finalDamage}`}
                {log.critical && " (CRÍTICO)"}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
