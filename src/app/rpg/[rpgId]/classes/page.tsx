import Link from "next/link"
import styles from "./page.module.css"
import { classes } from "@/data/rpg/world-of-clans/classes"
import rpgItem from "@/data/rpg/world-of-clans/rpg"

export default function ClassPage() {
  return (
    <div className={styles.container}>
      {classes.map((classe) => (
        <section key={classe.id} className={styles.card}>
          <Link href={`/rpg/${rpgItem.id}/classes/${classe.id}`}>
            <h2 className={styles.title}>{classe.name}</h2>
          </Link>
        </section>
      ))}
    </div>
  )
}
