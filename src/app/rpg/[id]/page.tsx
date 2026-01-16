import rpgs from "@/data/rpgs"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Image from "next/image"

type Params = {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = () => {
  return {
    title: "rpg",
  }
}
export default async function ViewInRpg({ params }: Params) {
  const { id } = await params

  const rpg = rpgs.find((r) => r.id === Number(id))

  if (!rpg) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{rpg.name}</h1>
      </header>
      <p className={styles.description}>{rpg.description}</p>
      <h2>Crônicas do Mundo</h2>
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
        <Image
          src="/images/bg-races.jpg"
          alt="Raças"
          width={200}
          height={100}
        />
      </div>
    </div>
  )
}
