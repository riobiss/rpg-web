"use client"

import players from "@/data/rpg/World of Clans/entites/player"
import enemies from "@/data/rpg/World of Clans/entites/enemy"
import { useState } from "react"
import styles from "./SelectCharacter.module.css"
import { Character } from "@/types/Character"
import { Button } from "@/components/Button"

type Props = {
  onConfirm: (characters: Character[]) => void
}

export default function SelectCharacter({ onConfirm }: Props) {
  const [view, setView] = useState<"players" | "enemies">("players")
  const [selected, setSelected] = useState<Character[]>([])

  const list = view === "players" ? players : enemies

  function handleSelect(character: Character) {
    const alreadySelected = selected.some((c) => c.id === character.id)
    if (alreadySelected) return

    setSelected((prev) => [...prev, character])
  }
  function handleRemove(id: Character["id"]) {
    setSelected((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className={styles.container}>
      <h2>Configurar partida</h2>
      <h3>Selecione os participantes</h3>

      <div className={styles.containerCharacter}>
        <div className={styles.switchButtons}>
          <button
            className={`${styles.buttonSelect} ${
              view === "players" ? styles.buttonActive : ""
            }`}
            onClick={() => setView("players")}
          >
            Jogadores
          </button>

          <button
            className={`${styles.buttonSelect} ${
              view === "enemies" ? styles.buttonActive : ""
            }`}
            onClick={() => setView("enemies")}
          >
            Inimigos
          </button>
        </div>

        <ul className={styles.listCharacter}>
          {list.map((c) => {
            const isSelected = selected.some((s) => s.id === c.id)

            return (
              <li key={c.id}>
                <span>{c.name}</span>

                <button className={styles.showCharacterButton}>Exibir</button>

                <button
                  className={styles.selectCharacterButton}
                  onClick={() => handleSelect(c)}
                  disabled={isSelected}
                >
                  {isSelected ? "Selecionado" : "Selecionar"}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      {selected.length > 0 && (
        <div className={styles.containerSelected}>
          <h3>Selecionados ({selected.length})</h3>
          <ul className={styles.listCharacter}>
            {selected.map((c) => (
              <li key={c.id}>
                <span>{c.name}</span>

                <div className={styles.characterActions}>
                  <button onClick={() => handleRemove(c.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button
        disabled={selected.length < 2}
        onClick={() => onConfirm(selected)}
      >
        Confirmar jogadores
      </Button>
    </div>
  )
}
