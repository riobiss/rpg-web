import { BaseCharacter } from "@/types/BaseCharacter"
import styles from "./SelectTarget.module.css"

type Props = {
  characters: BaseCharacter[]
  onSelect: (target: BaseCharacter) => void
}

export default function SelectTarget({ characters, onSelect }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Selecione o alvo</h3>

      <ul className={styles.targetList}>
        {characters.map((c) => (
          <li key={c.id} className={styles.targetCard}>
            <div className={styles.info}>
              <span className={styles.name}>{c.identity.name}</span>
              <span className={styles.stats}>
                {c.state.currentLife}/{c.health.life} HP • {c.defense.base} DEF
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
