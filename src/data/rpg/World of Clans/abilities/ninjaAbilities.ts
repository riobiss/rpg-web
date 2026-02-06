import { Ability } from "@/types/Ability"

export const ninjaAbilities: Ability[] = [
  {
    id: "abil_01",
    source: "class",
    name: "Passo Silencioso",
    description:
      "Você se move sem produzir som. Recebe vantagem em testes de Furtividade e não provoca ataques de oportunidade durante o movimento.",
    level: 1,
    type: "Acão",
    damage: "N/A",
    duration: "1 turno",
    range: "Pessoal",
    cost: {
      stamina: 3,
    },
  },
  {
    id: "abil_02",
    source: "class",
    name: "Ataque das Sombras",
    description:
      "Se atacar um inimigo que ainda não percebeu sua presença ou que esteja flanqueado, você causa dano extra.",
    level: 1,
    type: "Ação",
    damage: "Dano da arma + 1d adicional",
    duration: "Instantânea",
    range: "Corpo a corpo",
    cost: {
      stamina: 3,
    },
  },
  {
    id: "abil_03",
    source: "class",
    name: "Troca Rápida",
    description:
      "Quando seria atingido, você pode se mover rapidamente para uma posição próxima, reduzindo o dano*ou evitando o ataque, se houver espaço livre.",
    level: 1,
    type: "Reação",
    damage: "N/A",
    duration: "Instantânea",
    range: "3 metros",
    cost: {
      stamina: 3,
    },
  },
]
