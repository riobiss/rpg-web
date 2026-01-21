import rpgs from "@/data/rpgs"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import { Params } from "@/types/Params"

export const generateMetadata = () => {
  return {
    title: "rpg",
  }
}
export default async function ViewInRpg({ params }: Params) {
  const { rpgId } = await params
  const rpg = rpgs.find((r) => r.id === Number(rpgId))
  if (!rpg) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{rpg.name}</h2>
      <p className={styles.description}>{rpg.description}</p>

      <h3 className={styles.sectionTitle}>Crônicas do Mundo</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/images/bg-library.jpg"
            alt="Biblioteca"
            fill
            className={styles.cardImage}
          />
          <span>Biblioteca</span>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/bg-regioes.jpg"
            alt="Regiões"
            fill
            className={styles.cardImage}
          />
          <span>Regiões</span>
        </div>

        <Link href={`/rpg/${rpg.id}/races`} className={styles.card}>
          <Image
            src="/images/bg-races.jpg"
            alt="Raças"
            fill
            className={styles.cardImage}
          />
          <span>Raças</span>
        </Link>
      </div>
    </div>
  )
}
