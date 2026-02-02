import { Character } from "@/types/Character"
import styles from "./SelectTarget.module.css"

type Props = {
  characters: Character[]
  onSelect: (target: Character) => void
}

export default function SelectTarget({ characters, onSelect }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Selecione o alvo</h3>

      <ul className={styles.targetList}>
        {characters.map((c) => (
          <li key={c.id} className={styles.targetCard}>
            <div className={styles.info}>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.stats}>
                {c.health} HP • {c.defense} DEF
              </span>
            </div>

            <button className={styles.selectButton} onClick={() => onSelect(c)}>
              Atacar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
