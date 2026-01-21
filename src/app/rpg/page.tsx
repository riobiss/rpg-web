import rpg from "@/data/rpgs"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
export default function ViewRpg() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>RPGs</h2>
      <main className={styles.containerMain}>
        {rpg.map((item) => (
          <Link
            href={`/rpg/${item.id}`}
            key={item.id}
            className={styles.containerRpg}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                width={300}
                height={420}
                alt={item.name}
              />
            </div>

            <h3 className={styles.rpgTitle}>{item.name}</h3>

            <p className={styles.rpgDescription}>{item.description}</p>
          </Link>
        ))}
      </main>
    </div>
  )
}
