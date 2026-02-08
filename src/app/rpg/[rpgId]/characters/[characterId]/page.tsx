import Image from "next/image"
import styles from "./page.module.css"
import players from "@/data/rpg/world-of-clans/entities/player"
import { notFound } from "next/navigation"

type Params = {
  params: Promise<{
    characterId: string
  }>
}

export default async function CharactersPage({ params }: Params) {
  const { characterId } = await params

  const character = players.find((p) => p.id === characterId)
  if (!character) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <section key={character.id} className={styles.card}>
        <h3>{character.identity.name}</h3>
        <div className={styles.header}>
          <Image src={character.image} alt={character.identity.name} width={150} height={192} />
          <div>
            {character.identity.nickname && <p>“{character.identity.nickname}”</p>}
            <p>
              {character.identity.race} · {character.identity.class}
              {character.identity.classReinforcement &&
                ` / ${character.identity.classReinforcement}`}
            </p>
            <p>Reino: {character.identity.kingdom}</p>
          </div>
        </div>

        {/* Estado */}
        <div className={styles.grid}>
          <div>
            <h4>Status</h4>
            <p>
              Vida: {character.state.currentLife}/{character.health.life}
            </p>
            <p>
              Mana: {character.state.currentMana}/{character.health.mana}
            </p>
            <p>
              Sanidade: {character.state.currentSanity}/{character.health.sanity}
            </p>
            <p>
              Exaustão: {character.state.currentExhaustion}/{character.health.exhaustion}
            </p>
          </div>

          <div>
            <h4>Defesa</h4>
            <p>Base: {character.defense.base}</p>
            <p>Armadura: {character.defense.armor}</p>
            <p>Escudo: {character.defense.shield}</p>
            <p>Evasão: {character.defense.evasion}</p>
          </div>

          <div>
            <h4>Progressão</h4>
            <p>Nível: {character.progression.level}</p>
            <p>XP: {character.progression.xp}</p>
            <p>Próximo nível: {character.progression.xpToNextLevel}</p>
          </div>
        </div>

        {/* Atributos */}
        <div>
          <h4>Atributos</h4>
          <ul className={styles.list}>
            {Object.entries(character.attributes).map(([key, attr]) => (
              <li key={key}>
                <strong>{key}</strong>: {attr.total} ({attr.base} +{" "}
                {attr.modifiers.join(" + ")})
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h4>Perícias</h4>
          <ul className={styles.list}>
            {Object.entries(character.skills).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Dados pessoais */}
        <div className={styles.grid}>
          <div>
            <h4>Físico</h4>
            <p>Idade: {character.physical.age}</p>
            <p>Altura: {character.physical.heightCm}cm</p>
            <p>Peso: {character.physical.weightKg}kg</p>
            <p>Olhos: {character.physical.eyes}</p>
            <p>Pele: {character.physical.skin}</p>
            <p>Cabelo: {character.physical.hair}</p>
            <p>{character.physical.other}</p>
          </div>

          <div>
            <h4>Pessoal</h4>
            <p>Religião: {character.personal.religion}</p>
            <p>Língua: {character.personal.language}</p>
            <p>Defeitos: {character.personal.defects}</p>
          </div>

          <div>
            <h4>Ancestralidade</h4>
            <p>{character.ancestry.description}</p>
          </div>
        </div>

        {/* Equipamentos / Meta */}
        <div className={styles.grid}>
          <div>
            <h4>Equipamentos</h4>
            <p>Armas: {character.equipment.weaponIds.join(", ") || "-"}</p>
            <p>Escudo: {character.equipment.shieldId ?? "-"}</p>
            <p>Armadura: {character.equipment.armorId ?? "-"}</p>
          </div>

          <div>
            <h4>Meta</h4>
            <p>NPC: {character.meta.isNPC ? "Sim" : "Não"}</p>
            <p>Editável: {character.meta.isEditable ? "Sim" : "Não"}</p>
            <p>Versão: {character.meta.version}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
