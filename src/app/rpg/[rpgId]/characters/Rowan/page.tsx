import rpgs from "@/data/rpgs"
import { PlayerCharacter } from "@/types/PlayerCharacter"
import Image from "next/image"
import styles from "./page.module.css"

export default function CharactersPage() {
  const rpg = rpgs[0]

  const characters = rpg.charactersData as PlayerCharacter[]

  return (
    <div className={styles.page}>
      {characters.map((c) => (
        <section key={c.id} className={styles.card}>
          <h3>{c.identity.name}</h3>
          <div className={styles.header}>
            <Image
              src={c.image}
              alt={c.identity.name}
              width={150}
              height={192}
            />
            <div>
              {c.identity.nickname && <p>“{c.identity.nickname}”</p>}
              <p>
                {c.identity.race} · {c.identity.class}
                {c.identity.classReinforcement &&
                  ` / ${c.identity.classReinforcement}`}
              </p>
              <p>Reino: {c.identity.kingdom}</p>
            </div>
          </div>

          {/* Estado */}
          <div className={styles.grid}>
            <div>
              <h4>Status</h4>
              <p>
                Vida: {c.state.currentLife}/{c.health.life}
              </p>
              <p>
                Mana: {c.state.currentMana}/{c.health.mana}
              </p>
              <p>
                Sanidade: {c.state.currentSanity}/{c.health.sanity}
              </p>
              <p>
                Exaustão: {c.state.currentExhaustion}/{c.health.exhaustion}
              </p>
            </div>

            <div>
              <h4>Defesa</h4>
              <p>Base: {c.defense.base}</p>
              <p>Armadura: {c.defense.armor}</p>
              <p>Escudo: {c.defense.shield}</p>
              <p>Evasão: {c.defense.evasion}</p>
            </div>

            <div>
              <h4>Progressão</h4>
              <p>Nível: {c.progression.level}</p>
              <p>XP: {c.progression.xp}</p>
              <p>Próximo nível: {c.progression.xpToNextLevel}</p>
            </div>
          </div>

          {/* Atributos */}
          <div>
            <h4>Atributos</h4>
            <ul className={styles.list}>
              {Object.entries(c.attributes).map(([key, attr]) => (
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
              {Object.entries(c.skills).map(([key, value]) => (
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
              <p>Idade: {c.physical.age}</p>
              <p>Altura: {c.physical.heightCm}cm</p>
              <p>Peso: {c.physical.weightKg}kg</p>
              <p>Olhos: {c.physical.eyes}</p>
              <p>Pele: {c.physical.skin}</p>
              <p>Cabelo: {c.physical.hair}</p>
              <p>{c.physical.other}</p>
            </div>

            <div>
              <h4>Pessoal</h4>
              <p>Religião: {c.personal.religion}</p>
              <p>Língua: {c.personal.language}</p>
              <p>Defeitos: {c.personal.defects}</p>
            </div>

            <div>
              <h4>Ancestralidade</h4>
              <p>{c.ancestry.description}</p>
            </div>
          </div>

          {/* Equipamentos / Meta */}
          <div className={styles.grid}>
            <div>
              <h4>Equipamentos</h4>
              <p>Armas: {c.equipment.weaponIds.join(", ") || "-"}</p>
              <p>Escudo: {c.equipment.shieldId ?? "-"}</p>
              <p>Armadura: {c.equipment.armorId ?? "-"}</p>
            </div>

            <div>
              <h4>Meta</h4>
              <p>NPC: {c.meta.isNPC ? "Sim" : "Não"}</p>
              <p>Editável: {c.meta.isEditable ? "Sim" : "Não"}</p>
              <p>Versão: {c.meta.version}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
