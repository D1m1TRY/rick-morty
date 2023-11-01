import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Rick and Morty project
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://rickandmortyapi.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            API Docs <span>-&gt;</span>
          </h2>
        </a>
        <Link
          href='/characters'
          className={styles.card}
        >
          <h2>
            Characters <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
