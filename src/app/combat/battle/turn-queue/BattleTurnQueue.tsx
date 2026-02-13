import { BaseCharacter } from "@/types/BaseCharacter"
import styles from "./Battle.module.css"

type Props = {
  characters: BaseCharacter[]
  currentCharacterId?: string
}

export default function BattleTurnQueue({
  characters,
  currentCharacterId,
}: Props) {
  return (
    <div className={styles.turnQueue}>
      <h2>Fila</h2>

      <div className={styles.header}>
        <span>Nome</span>
        <span>Vida</span>
        <span>Defesa</span>
      </div>

      <ul className={styles.queueList}>
        {characters.map((c, index) => {
          const totalDefense =
            c.defense.base + c.defense.armor + c.defense.shield
          const isActive = c.id === currentCharacterId

          return (
            <li
              key={c.id}
              className={`${styles.queueItem} ${isActive ? styles.active : ""}`}
            >
              <span>
                {index + 1}. {c.identity.name}
              </span>

              <span>
                {c.state.currentLife}/{c.health.life}
              </span>

              <span>{totalDefense}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
