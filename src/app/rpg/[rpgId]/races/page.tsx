import { Params } from "@/types/Params"
import rpgs from "@/data/rpgs"
import Image from "next/image"
import Link from "next/link"

export default async function RacesPage({ params }: Params) {
  const { rpgId } = await params

  const rpg = rpgs.find((r) => r.id === Number(rpgId))
  if (!rpg) return <div>rpg não encontrado</div>
  return (
    <div>
      <h1>Raças</h1>
      {rpg.races?.map((races) => {
        return (
          <div key={races.id}>
            <h2>{races.name}</h2>
            <Link href={`/rpg/${rpg.id}/races/${races.name}`}>
              <Image
                src={races.img}
                alt={`Imagem do ${races.name} `}
                width={400}
                height={200}
              />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
