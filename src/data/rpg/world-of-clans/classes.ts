import { bersekAbilities } from "./abilities/bersekAbility"
import { ninjaAbilities } from "./abilities/ninjaAbilities"

export const classes = [
  // Arqueiros
  { abilities: [], name: "Arqueiros", id: "arqueiros", category: "arqueiros" },
  {
    abilities: [],
    name: "Mosqueteiro",
    id: "mosqueteiro",
    category: "arqueiros",
  },
  {
    abilities: [],
    name: "Arqueiro Mágico",
    id: "arqueiro_magico",
    category: "arqueiros",
  },

  // Guerreiros
  { abilities: [], name: "Guerreiro", id: "guerreiro", category: "guerreiros" },
  { abilities: [], name: "Cavaleiro", id: "cavaleiro", category: "guerreiros" },
  { abilities: [], name: "Lanceiro", id: "lanceiro", category: "guerreiros" },
  { abilities: [], name: "Soldado", id: "soldado", category: "guerreiros" },
  { abilities: [], name: "Gladiador", id: "gladiador", category: "guerreiros" },
  { abilities: [], name: "Samurai", id: "samurai", category: "guerreiros" },

  // Bárbaros
  { abilities: [], name: "Bárbaro", id: "barbaro", category: "barbaros" },
  {
    abilities: bersekAbilities,
    name: "Berserker",
    id: "berserker",
    category: "barbaros",
  },
  {
    abilities: [],
    name: "Bárbaro Rúnico",
    id: "barbaro_runico",
    category: "barbaros",
  },
  { abilities: [], name: "Monge", id: "monge", category: "barbaros" },

  // Magos
  { abilities: [], name: "Mago", id: "mago", category: "magos" },
  {
    abilities: [],
    name: "Mago Espiritual",
    id: "mago_espiritual",
    category: "magos",
  },
  {
    abilities: [],
    name: "Mago de Guerra",
    id: "mago_de_guerra",
    category: "magos",
  },
  {
    abilities: [],
    name: "Mago Infernal",
    id: "mago_infernal",
    category: "magos",
  },
  { abilities: [], name: "Bardo", id: "bardo", category: "magos" },

  // Feiticeiro
  {
    abilities: [],
    name: "Feiticeiro",
    id: "feiticeiro",
    category: "feiticeiros",
  },

  // Druidas
  { abilities: [], name: "Druida", id: "druida", category: "druidas" },
  { abilities: [], name: "Xamã", id: "xama", category: "druidas" },
  {
    abilities: [],
    name: "Druida Sombrio",
    id: "druida_sombrio",
    category: "druidas",
  },

  // Bruxos
  { abilities: [], name: "Bruxo", id: "bruxo", category: "bruxos" },
  {
    abilities: [],
    name: "Cavaleiro das Trevas",
    id: "cavaleiro_das_trevas",
    category: "bruxos",
  },

  // Clérigos
  { abilities: [], name: "Clérigo", id: "clerigo", category: "clerigos" },
  {
    abilities: [],
    name: "Curandeiro Guerreiro",
    id: "curandeiro_guerreiro",
    category: "clerigos",
  },
  { abilities: [], name: "Paladino", id: "paladino", category: "clerigos" },
  { abilities: [], name: "Guardião", id: "guardiao", category: "clerigos" },

  // Artífice
  { abilities: [], name: "Artífice", id: "artifice", category: "artifice" },

  // Caçadores
  { abilities: [], name: "Caçador", id: "cacador", category: "cacadores" },
  {
    abilities: [],
    name: "Domador de Monstros",
    id: "domador_de_monstros",
    category: "cacadores",
  },
  {
    abilities: [],
    name: "Cozinheiro de Feras",
    id: "cozinheiro_de_feras",
    category: "cacadores",
  },
  {
    abilities: [],
    name: "Caçador Espiritual",
    id: "cacador_espiritual",
    category: "cacadores",
  },

  // Ladinos
  { abilities: [], name: "Ladino", id: "ladino", category: "ladinos" },
  { abilities: [], name: "Pirata", id: "pirata", category: "ladinos" },
  {
    abilities: ninjaAbilities,
    name: "Ninja",
    id: "ninja",
    category: "ladinos",
  },
]
