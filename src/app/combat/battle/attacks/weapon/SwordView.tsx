import { useState } from "react"
import styles from "./SwordView.module.css"
import type { Weapons } from "@/types/Weapons"
import { Button } from "@/components/Button"

type Props = {
  weapons: Weapons[]
  onConfirm: (weapon: Weapons) => void
}

export default function SwordView({ weapons, onConfirm }: Props) {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapons | null>(null)

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
              <span className={styles.type}>{w.weaponType}</span>
            </div>

            <div className={styles.stats}>
              <div>
                <label>Dano</label>
                <span>
                  {w.damage.base
                    .map((d) => `${d.rolls}d${d.sides}`)
                    .join(" + ")}
                </span>
              </div>
              <div>
                <label>Durabilidade</label>
                <span>{w.durability}</span>
              </div>
              <div>
                <label>Peso</label>
                <span>{w.weight}</span>
              </div>
            </div>

            {w.special && (
              <div className={styles.special}>
                <label>Efeito</label>
                <span>{w.special}</span>
              </div>
            )}

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
