import styles from "./index.module.css"
export function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.confirmButton} {...rest}>
      {children}
    </button>
  )
}
