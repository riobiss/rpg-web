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
      <h3>Crônicas do Mundo</h3>
      <div className={styles.library}>
        <p>Biblioteca</p>
        <Image
          src="/images/bg-library.jpg"
          alt="Biblioteca"
          width={200}
          height={100}
        />
      </div>
      <div className={styles.map}>
        <Image
          src="/images/bg-regioes.jpg"
          alt="Regiões"
          width={200}
          height={100}
        />
        <p>Regiões</p>
      </div>
      <div className={styles.races}>
        <p>Raças</p>
        <Link href={`/rpg/${rpg.id}/races`}>
          <Image
            src="/images/bg-races.jpg"
            alt="Raças"
            width={200}
            height={100}
          />
        </Link>
      </div>
    </div>
  )
}
