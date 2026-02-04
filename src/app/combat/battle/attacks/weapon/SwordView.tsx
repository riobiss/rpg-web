import { useState } from "react"
import styles from "./SwordView.module.css"
import type { Weapon } from "@/types/Weapon"
import { Button } from "@/components/Button"

type Props = {
  weapons: Weapon[]
  onConfirm: (weapon: Weapon) => void
}

export default function SwordView({ weapons, onConfirm }: Props) {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null)

  return (
    <div className={styles.weaponGrid}>
      {weapons.map((w) => {
        const isSelected = selectedWeapon?.id === w.id

        return (
          <div
            key={w.id}
            className={`${styles.weaponCard} ${isSelected ? styles.selected : ""}`}
            onClick={() => setSelectedWeapon(w)}
          >
            <div className={styles.header}>
              <span className={styles.name}>{w.name}</span>
              <span className={styles.type}>{w.range}</span>
            </div>

            <div className={styles.stats}>
              <div>
                <label>Dano</label>
                <span>
                  {w.damage.rolls}d{w.damage.sides} ({w.damage.type})
                </span>
              </div>

              <div>
                <label>Peso</label>
                <span>{w.weight}</span>
              </div>
            </div>

            {isSelected && (
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  onConfirm(w)
                }}
              >
                Confirmar ataque
              </Button>
            )}
          </div>
        )
      })}
    </div>
  )
}
