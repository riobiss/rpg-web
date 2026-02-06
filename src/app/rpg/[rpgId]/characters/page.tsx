import rpgs from "@/data/rpgs"
import { PlayerCharacter } from "@/types/PlayerCharacter"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

type Params = {
  params: Promise<{
    rpgId: string
  }>
}

export default async function CharactersPage({ params }: Params) {
  const { rpgId } = await params
  const rpg = rpgs.find((r) => r.id === Number(rpgId))
  if (!rpg) return <div>RPG não encontrado</div>

  const characters = rpg.charactersData as PlayerCharacter[]

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Personagens</h1>
      <section className={styles.grid}>
        {characters.map((c) => (
          <article key={c.id} className={styles.card}>
            <Link href={`/rpg/${rpg.id}/characters/${c.identity.name}`}>
              <Image
                src={c.image}
                alt={`Imagem do personagem ${c.identity.name}`}
                fill
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h2 className={styles.name}>{c.identity.name}</h2>

              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
