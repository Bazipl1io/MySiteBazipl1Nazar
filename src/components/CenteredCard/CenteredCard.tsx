import type { ReactNode } from 'react'
import styles from './CenteredCard.module.css'

type CenteredCardProps = {
  children: ReactNode
}

function CenteredCard({ children }: CenteredCardProps) {
  return <section className={styles.card}>{children}</section>
}

export default CenteredCard
