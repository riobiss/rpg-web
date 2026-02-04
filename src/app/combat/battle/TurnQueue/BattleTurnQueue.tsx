import { PlayerCharacter } from "@/types/PlayerCharacter"
import styles from "./Battle.module.css"

type Props = {
  characters: PlayerCharacter[]
}

export default function BattleTurnQueue({ characters }: Props) {
  return (
    <div className={styles.turnQueue}>
      <h2>Fila</h2>

      <div className={styles.header}>
        <span>Nome</span>
        <span>Vida</span>
        <span>Defesa</span>
      </div>

      <ul className={styles.queueList}>
        {characters.map((c) => {
          const totalDefense =
            c.defense.base + c.defense.armor + c.defense.shield

          return (
            <li key={c.id} className={styles.queueItem}>
              <span>{c.identity.name}</span>

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
