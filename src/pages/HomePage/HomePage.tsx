import { useState } from 'react'
import CenteredCard from '../../components/CenteredCard/CenteredCard'
import styles from './HomePage.module.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/bazipl1io' },
  { label: 'Twitch', href: 'https://www.twitch.tv/bazipl1' },
  { label: 'Telegram', href: 'https://t.me/bazipl1' },
  { label: 'YouTube', href: 'https://www.youtube.com/@bazipl1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bazipl1' },
]

const copyItems = [
  { label: 'Telegram Main / Game', value: '@bazipl' },
  { label: 'Telegram Work', value: '@bazipl1' },
  { label: 'Discord', value: 'bazipl1' },
]

function HomePage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  async function copyValue(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedItem(label)
      window.setTimeout(() => setCopiedItem(null), 1600)
    } catch {
      setCopiedItem(null)
    }
  }

  return (
    <main className={styles.page}>
      <CenteredCard>
        <header className={styles.header}>
          <h1>bazipl1</h1>
          <div className={styles.city}>
            <span className={styles.cityLabel}>City:</span>
            <a
              className={styles.cityLink}
              href="https://www.google.com/maps/search/?api=1&query=Kharkiv"
              target="_blank"
              rel="noreferrer"
            >
              Kharkiv
            </a>
          </div>
        </header>

        <nav className={styles.socialLinks} aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              className={styles.socialLink}
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.copyList} aria-label="Contacts to copy">
          {copyItems.map((item) => (
            <button
              className={styles.copyButton}
              key={item.label}
              onClick={() => void copyValue(item.label, item.value)}
              type="button"
            >
              <span>{item.label}</span>
              <span className={styles.copyValue}>
                {copiedItem === item.label ? 'Copied' : item.value}
              </span>
            </button>
          ))}
        </div>

        <a className={styles.menuLink} href="#navigation">
          Navigation
        </a>
      </CenteredCard>
    </main>
  )
}

export default HomePage
