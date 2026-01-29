import { Character } from "@/types/Character"
import styles from "./Battle.module.css"
type Props = {
  characters: Character[]
}
export default function BattleTurnQueue({ characters }: Props) {
  return (
    <div className={styles.turnQueue}>
      <h2>Fila</h2>
      <span>Nome Vida Defesa</span>
      <ul className={styles.queueList}>
        {characters.map((c) => (
          <li key={c.id}>
            <span>{c.name}</span>
            <span>
              {c.health} {c.defense}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
