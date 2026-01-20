import rpg from "@/data/rpgs"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
export default function ViewRpg() {
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>RPGs</h2>
      </header>
      <main className={styles.containerMain}>
        {rpg.map((rpg) => {
          return (
            <div className={styles.containerRpg} key={rpg.id}>
              <div>
                <h3>{rpg.name}</h3>
              </div>
              <Link href={`/rpg/${rpg.id}`}>
                <Image
                  src={rpg.image}
                  width={250}
                  height={300}
                  alt={rpg.name}
                />
              </Link>
            </div>
          )
        })}
      </main>
    </div>
  )
}
