import { MundiMap } from "./components/mundi-map/MundiMap"
import styles from "./page.module.css"

export default function MapPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Mapa Mundi</h1>
      <MundiMap />
      <section className={styles.extraArea}>
        <h2 className={styles.extraTitle}>Reino tão tão distante</h2>
        <p className={styles.extraText}>tão distante</p>
      </section>
    </div>
  )
}
