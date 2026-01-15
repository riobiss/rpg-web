import rpg from "@/data/rpgs"

export default function ViewRpg() {
  return (
    <div>
      {rpg.map((rpg) => {
        return <p key={rpg.id}>{rpg.name}</p>
      })}
    </div>
  )
}
