import styles from "./SwordView.module.css"
import type { Weapons } from "@/types/Weapons"

type Props = {
  weapons: Weapons[]
}

export default function SwordView({ weapons }: Props) {
  return (
    <div>
      <h2 className={styles.title}>Espadas</h2>

      {weapons.length === 0 && (
        <span className={styles.empty}>Nenhuma espada equipada</span>
      )}

      <div className={styles.weaponGrid}>
        {weapons.map((w) => (
          <div key={w.id} className={styles.weaponCard}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
