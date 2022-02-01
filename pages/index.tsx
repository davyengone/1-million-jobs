import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hackages Venture</title>
        <meta name="description" content="Plan to create 1 Meaningful Million Jobs over time!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Creating 1 Million Meaningful Jobs in a lifetime
        </h1>

        <p className={styles.description}>
          {"Here are a few projects/companies we're building and investing in."}
        </p>

        <div className={styles.grid}>
          <a href="https://hackages.io" className={styles.card}>
            <h2>Hackages Learning Platform</h2>
          </a>

          <a href="https://techjargon.io" className={styles.card}>
            <h2>The Tech Jargon Game</h2>
          </a>

          <a
            href="https://refactoring.coach"
            className={styles.card}
          >
            <h2>Refactoring Coach</h2>
          </a>

          <a
            href="https://www.youtube.com/channel/UCKmzC1m6b-riW_H7VC0Xu4A"
            className={styles.card}
          >
            <h2>The Growth Engineer Podcast</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://davy.engineer.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Davy Engone
        </a>
      </footer>
    </div>
  )
}
