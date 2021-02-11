import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <Head>
        <title>API Developer Portal Example</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          API Developer Portal<br />with Next.js
        </h1>

        <p className={styles.description}>
          View the rendered API Reference (
            <Link href="/redoc"><a>Redoc</a></Link> / {' '}
          <Link href="/swagger-ui"><a>Swagger UI</a></Link>
          )
        </p>

        <p className={styles.description}>
          <Link href="/about"><a>About this project</a></Link> /{' '}
          <Link href="/using-mdx"><a>Using MDX</a></Link> /{' '}
          <Link href="/api-references"><a>Rendering API reference docs</a></Link>
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
