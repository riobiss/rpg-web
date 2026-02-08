"use client" 
import { useState } from "react"
import Link from "next/link"
import styles from "./page.module.css"
import { classes } from "@/data/rpg/world-of-clans/classes"
import rpgItem from "@/data/rpg/world-of-clans/rpg"

export default function ClassPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const groupedClasses = classes.reduce(
    (acc, item) => {
      const cat = item.category || "Outros"
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(item)
      return acc
    },
    {} as Record<string, typeof classes>,
  )
  function capitalize(str: string) {
    if (!str) return ""
    return str[0].toUpperCase() + str.slice(1)
  }

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <div className={styles.container}>
      {Object.entries(groupedClasses).map(([category, items]) => (
        <div key={category} className={styles.categoryWrapper}>
          <button
            className={styles.toggleButton}
            onClick={() => toggleCategory(category)}
          >
            {capitalize(category)}
            <span>{openCategory === category ? "▲" : "▼"}</span>
          </button>

          {openCategory === category && (
            <div className={styles.grid}>
              {items.map((classe) => (
                <Link
                  href={`/rpg/${rpgItem.id}/classes/${classe.id}`}
                  key={classe.id}
                  className={styles.card}
                >
                  <h3 className={styles.title}>{classe.name}</h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
