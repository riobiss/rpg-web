import Link from "next/link"
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/rpg">RPGs</Link>
            </li>
            <li>
              <Link href="/docs">DOCs</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>RPG HELPER</h1>
        <h2 className={styles.start}>
          <Link href="/combat">Começar</Link>
        </h2>
      </main>
    </div>
  )
}
