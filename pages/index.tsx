import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The 1 Million Jobs Project</title>
        <meta name="description" content="Plan to create 1 Meaningful Million Jobs over time!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Creating 1 Million Meaningful Jobs in a lifetime
        </h1>

        <p className={styles.description}>
          Join the community by choosing the category you belong to{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>I work at one of your companies</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Your courses helped me find a meaningful Job</h2>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>You got me a meaningful freelance Job</h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>One of your products provided me a meaningful Job</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://davyengone.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Davy Engone
        </a>
      </footer>
    </div>
  )
}
