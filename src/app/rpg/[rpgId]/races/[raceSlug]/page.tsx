import rpgs from "@/data/rpgs"

export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}
export default async function Page({
  params,
}: {
  params: { rpgId: string; raceSlug: string }
}) {
  const { rpgId } = await params
  const rpg = rpgs.find((r) => r.id === Number(rpgId))
  if (!rpg) return <div></div>

  return (
    <>
      {rpg.name}
      <p>RPG: {params.rpgId}</p>
      <p>Raça: {params.raceSlug}</p>
    </>
  )
}
