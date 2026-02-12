import players from "@/data/rpg/world-of-clans/entities/player"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { items } from "@/data/rpg/world-of-clans/items/items"
type Params = {
  params: Promise<{
    characterId: string
  }>
}
export default async function InventoryPage({ params }: Params) {
  const { characterId } = await params
  const character = players.find((p) => p.id === characterId)
  if (!character) {
    return notFound()
  }
  const resolvedInventory = character.inventory.map((entry) => {
    return items.find((i) => i.id === entry)
  })
  const inventoryItemsExist = resolvedInventory.length > 0
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Inventário</p>
          <h1 className={styles.title}>{character.identity.name}</h1>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Itens do Personagem</h2>
        {!inventoryItemsExist && (
          <p className={styles.emptyState}>Nenhum item no inventário.</p>
        )}
        {inventoryItemsExist && (
          <div className={styles.cardGrid}>
            {resolvedInventory.map((item) => (
              <div
                key={item?.id}
                className={`${styles.card} ${styles[item?.rarity as string]}`}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item?.name}</h3>
                  <span>{item?.rarity}</span>
                </div>
                <p className={styles.cardBodyItalic}>{item?.description}</p>
                {item?.ability && <p>Habilidade: {item?.ability}</p>}
                <span>Q.{item?.quantity}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
