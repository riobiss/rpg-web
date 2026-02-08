import { bersekAbilities } from "./abilities/bersekAbility"
import { ninjaAbilities } from "./abilities/ninjaAbilities"

export const classes = [
  // Arqueiros
  { abilities: [], name: "Arqueiros", id: "arqueiros" },
  { abilities: [], name: "Mosqueteiro", id: "mosqueteiro" },
  { abilities: [], name: "Arqueiro Mágico", id: "arqueiro_magico" },

  // Guerreiros
  { abilities: [], name: "Guerreiro", id: "guerreiro" },
  { abilities: [], name: "Cavaleiro", id: "cavaleiro" },
  { abilities: [], name: "Lanceiro", id: "lanceiro" },
  { abilities: [], name: "Soldado", id: "soldado" },
  { abilities: [], name: "Gladiador", id: "gladiador" },
  { abilities: [], name: "Samurai", id: "samurai" },

  // Bárbaros
  { abilities: [], name: "Bárbaro", id: "barbaro" },
  { abilities: bersekAbilities, name: "Berserker", id: "berserker" },
  { abilities: [], name: "Bárbaro Rúnico", id: "barbaro_runico" },
  { abilities: [], name: "Monge", id: "monge" },

  // Magos
  { abilities: [], name: "Mago", id: "mago" },
  { abilities: [], name: "Mago Espiritual", id: "mago_espiritual" },
  { abilities: [], name: "Mago de Guerra", id: "mago_de_guerra" },
  { abilities: [], name: "Mago Infernal", id: "mago_infernal" },
  { abilities: [], name: "Bardo", id: "bardo" },

  // Feiticeiro
  { abilities: [], name: "Feiticeiro", id: "feiticeiro" },

  // Druidas
  { abilities: [], name: "Druida", id: "druida" },
  { abilities: [], name: "Xamã", id: "xama" },
  { abilities: [], name: "Druida Sombrio", id: "druida_sombrio" },

  // Bruxos
  { abilities: [], name: "Bruxo", id: "bruxo" },
  { abilities: [], name: "Cavaleiro das Trevas", id: "cavaleiro_das_trevas" },

  // Clérigos
  { abilities: [], name: "Clérigo", id: "clerigo" },
  { abilities: [], name: "Curandeiro Guerreiro", id: "curandeiro_guerreiro" },
  { abilities: [], name: "Paladino", id: "paladino" },
  { abilities: [], name: "Guardião", id: "guardiao" },

  // Artífice
  { abilities: [], name: "Artífice", id: "artifice" },

  // Caçadores
  { abilities: [], name: "Caçador", id: "cacador" },
  { abilities: [], name: "Domador de Monstros", id: "domador_de_monstros" },
  { abilities: [], name: "Cozinheiro de Feras", id: "cozinheiro_de_feras" },
  { abilities: [], name: "Caçador Espiritual", id: "cacador_espiritual" },

  // Ladinos
  { abilities: [], name: "Ladino", id: "ladino" },
  { abilities: [], name: "Pirata", id: "pirata" },
  { abilities: ninjaAbilities, name: "Ninja", id: "ninja" },
]
