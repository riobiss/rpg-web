"use client"
import SelectCharacter from "./setup/SelectCharacter"
import styles from "./page.module.css"
export default function CombatPage() {
  return (
    <div className={styles.container}>
      <h2>Campo de batalha</h2>
      <SelectCharacter />
    </div>
  )
}
