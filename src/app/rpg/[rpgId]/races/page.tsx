import rpgs from "@/data/rpgs"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

type Params = {
  params: Promise<{
    rpgId: string
  }>
}

export default async function RacesPage({ params }: Params) {
  const { rpgId } = await params

  const rpg = rpgs.find((r) => r.id === Number(rpgId))
  if (!rpg) return <div>rpg não encontrado</div>
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Raças</h1>

      <section className={styles.grid}>
        {rpg.races?.map((race) => (
          <article key={race.id} className={styles.card}>
            <Link href={`/rpg/${rpg.id}/races/${race.name}`}>
              <Image
                src={race.img}
                alt={`Imagem da raça ${race.name}`}
                fill
                className={styles.image}
              />
              <h2>{race.name}</h2>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
