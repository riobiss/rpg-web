import Link from "next/link"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Forja</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Inicio</Link>
          </li>

          <li>
            <Link href={"/rpg"}>Campanhas</Link>
          </li>

          <li>
            <Link href={"/docs"}>Docs</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
