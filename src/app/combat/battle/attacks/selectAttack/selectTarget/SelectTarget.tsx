import { Character } from "@/types/Character"

type Props = {
  characters: Character[]
}
export default function selectTarget({ characters }: Props) {
  return (
    <div>
      <p>selecione o Alvo</p>
      <p>{characters.map((c) => c.name)}</p>
    </div>
  )
}
