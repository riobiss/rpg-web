import { classes } from "@/data/rpg/world-of-clans/classes"
import players from "@/data/rpg/world-of-clans/entities/player"
import { notFound } from "next/navigation"
import styles from "./page.module.css"

type Params = {
  params: Promise<{
    characterId: string
  }>
}
export default async function AbilitiesPage({ params }: Params) {
  const { characterId } = await params
  const character = players.find((p) => p.id === characterId)
  if (!character) {
    return notFound()
  }

  const normalize = (value: string) =>
    value
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")

  const classKey = normalize(character.identity.class)
  const classData =
    classes.find(
      (c) => normalize(c.id) === classKey || normalize(c.name) === classKey,
    ) ??
    classes.find((c) => {
      const idKey = normalize(c.id)
      const nameKey = normalize(c.name)
      return (
        idKey.startsWith(classKey) ||
        classKey.startsWith(idKey) ||
        nameKey.startsWith(classKey) ||
        classKey.startsWith(nameKey)
      )
    })

  const abilityIds = new Set([
    ...character.abilities.classMainIds,
    ...character.abilities.classReinforcementIds,
  ])
  const classAbilities = classData?.abilities ?? []
  const ownedAbilities = classAbilities.filter((ability) =>
    abilityIds.has(ability.id),
  )

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Habilidades</p>
          <h1 className={styles.title}>{character.identity.name}</h1>
        </div>
        <div className={styles.badge}>
          Classe: {classData?.name ?? "Desconhecida"}
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Habilidades do Personagem</h2>
        {ownedAbilities.length === 0 && (
          <p className={styles.emptyState}>Nenhuma habilidade cadastrada.</p>
        )}
        {ownedAbilities.length > 0 && (
          <div className={styles.cardGrid}>
            {ownedAbilities.map((ability) => (
              <article key={ability.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{ability.name}</h3>
                  {/* Badge de Nível estilizada */}
                  <span className={styles.levelBadge}>
                    Nível {ability.level}
                  </span>
                </div>

                {/* Descrição em itálico conforme a imagem */}
                <p className={styles.cardBodyItalic}>{ability.description}</p>

                <div className={styles.cardDetailsGrid}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabelOrange}>DANO</span>
                    <span className={styles.detailValue}>
                      {ability.damage || "N/A"}
                    </span>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.detailLabelOrange}>ALCANCE</span>
                    <span className={styles.detailValue}>
                      {ability.range || "Pessoal"}
                    </span>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.detailLabelOrange}>TIPO</span>
                    <span className={styles.detailValue}>{ability.type}</span>
                  </div>
                  {ability.cooldown && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabelOrange}>RECARGA</span>
                      <span className={styles.detailValue}>
                        {ability.cooldown} turnos
                      </span>
                    </div>
                  )}
                  {ability.duration && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabelOrange}>DURAÇÃO</span>
                      <span className={styles.detailValue}>
                        {ability.duration}
                      </span>
                    </div>
                  )}
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabelOrange}>CUSTO</span>

                    <span className={styles.detailValueHighlight}>
                      {ability.cost?.stamina
                        ? `${ability.cost.stamina} ST`
                        : "0"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
