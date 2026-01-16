import rpg from "@/data/rpgs"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
export default function ViewRpg() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>RPGs</h1>
      </header>
      <main className={styles.containerMain}>
        {rpg.map((rpg) => {
          return (
            <div className={styles.containerRpg} key={rpg.id}>
              <div>
                <p>Rpg</p>
                <p>Mestre</p>
              </div>
              <div>
                <p>{rpg.name}</p>
                <p>{rpg.master}</p>
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
