import { Ability } from "@/types/Ability"

export const berserkerAbilities: Ability[] = [
  {
    id: "abil_03",
    source: "class",
    name: "Golpe Ensanguentado",
    description:
      "Você ignora a dor por 2 turnos, recebendo em troca 1 ponto de exaustão, fazendo todo dano recebido ser reduzido pela metade e canalizado em sua raiva em um único ataque brutal. Se o ataque acertar: O alvo sofre 10 ponto de dano adicional contínuo no próximo turno (sangramento)",
    level: 1,
    type: "Ação",
    damage: "Dano canalizado + 10 sangramento ",
    duration: "2 turno",
    range: "Corpo a corpo",
    cost: {
      stamina: 3,
    },
  },
  {
    id: "abil_04",
    source: "class",
    name: "Palma da Destruição",
    description:
      "Bater as mãos com força gerando uma onda de choque poderosa que arremessa inimigos a 4 metros de distância, mas é necessário o inimigo realizar um teste de força de CA12, se ele passar não é afastado mas ainda sim recebe o dano de 1d20, podendo afetar também quem está a sua volta. ",
    level: 2,
    type: "Ação",
    damage: "1d20",
    duration: "Instantâneo",
    cost: {
        stamina: 4,
    },
    range: "3 metros (cone) e 2 metros ao seu redor.",
  },
]
