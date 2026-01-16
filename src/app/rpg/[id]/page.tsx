import rpgs from "@/data/rpgs"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Image from "next/image"
type Params = {
  params: {
    id: string
  }
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
    <div>
      <header>
        <h1>{rpg.name}</h1>
      </header>
      <p>{rpg.description}</p>
      <main>
        <h2>Crônicas do Mundo</h2>
        <div>
          <p>Biblioteca</p>
          <Image
            src="/images/bg-library.jpg"
            alt="Biblioteca"
            width={200}
            height={100}
          />
        </div>
        <div>
          <p>Regiões</p>
          <Image
            src="/images/bg-regioes.jpg"
            alt="Regiões"
            width={200}
            height={100}
          />
        </div>
        <div>
          <p>Raças</p>
          <Image
            src="/images/bg-races.jpg"
            alt="Raças"
            width={200}
            height={100}
          />
        </div>
      </main>
    </div>
  )
}
