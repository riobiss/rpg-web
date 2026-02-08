import { classes } from "@/data/rpg/world-of-clans/classes"
import styles from "./page.module.css" // Ajuste o caminho conforme necessário

type Props = {
  params: Promise<{
    classId: string
  }>
}

export default async function ClassPage({ params }: Props) {
  const { classId } = await params
  const classData = classes.find((c) => c.id === classId)

  return (
    <div className={styles.container}>
      {classData && (
        <>
          <h1 className={styles.classTitle}>{classData.name}</h1>
          <div className={styles.abilityGrid}>
            {classData.abilities.map((ability) => (
              <div key={ability.id} className={styles.abilityCard}>
                <div className={styles.abilityHeader}>
                  <h3 className={styles.abilityName}>{ability.name}</h3>
                  <span className={styles.abilityLevel}>Nível {ability.level}</span>
                </div>

                <p className={styles.abilityDescription}>{ability.description}</p>

                <div className={styles.abilityStats}>
                  {ability.damage && (
                    <div className={styles.statItem}>
                      <strong>Dano</strong>
                      {ability.damage}
                    </div>
                  )}
                  {ability.range && (
                    <div className={styles.statItem}>
                      <strong>Alcance</strong>
                      {ability.range}
                    </div>
                  )}
                  {ability.cooldown && (
                    <div className={styles.statItem}>
                      <strong>Recarga</strong>
                      {ability.cooldown}
                    </div>
                  )}
                  {ability.type && (
                    <div className={styles.statItem}>
                      <strong>Tipo</strong>
                      {ability.type}
                    </div>
                  )}

                  {(ability.cost?.mana || ability.cost?.stamina) && (
                    <div className={styles.statItem}>
                      <strong>Custo</strong>
                      <span className={styles.costBadge}>
                        {ability.cost.mana
                          ? `${ability.cost.mana} MP`
                          : `${ability.cost.stamina} ST`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}