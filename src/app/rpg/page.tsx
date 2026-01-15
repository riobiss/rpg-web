import rpg from "@/data/rpgs"

export default function ViewRpg() {
  return (
    <div>
      {rpg.map((rpg) => {
        return (
          <div key={rpg.id}>
            <p>{rpg.name}</p>
            <p>{rpg.master}</p>
          </div>
        )
      })}
    </div>
  )
}
