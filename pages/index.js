import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <Head>
        <title>API Developer Portal Example with Next.js</title>
        <meta name="description" content="Example of using Next.js for building an API Developer Portal" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Stephen_Mizell" />
        <meta name="og:url" content="https://apidevportal.smizell.com/" />
        <meta
          name="og:title"
          content="API Developer Portal Example with Next.js"
        />
        <meta
          name="og:description"
          content="Example of using Next.js for building an API Developer Portal"
        />
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
          <Link href="/about"><a>About this example</a></Link> /{' '}
          <Link href="/using-mdx"><a>Using MDX</a></Link> /{' '}
          <Link href="/api-references"><a>Rendering API reference docs</a></Link> /{' '}
          <Link href="https://github.com/smizell/api-dev-portal"><a>View the code</a></Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>By <Link href="https://twitter.com/Stephen_Mizell"><a>Stephen Mizell</a></Link></p>
      </footer>
    </div>
  )
}
