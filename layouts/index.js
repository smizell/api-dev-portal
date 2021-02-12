import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, frontMatter }) {
  return <div className="page">
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta
          name="description"
          content={frontMatter.description}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Stephen_Mizell" />
        <meta name="og:url" content="https://apidevportal.smizell.com/" />
        <meta
          name="og:title"
          content={frontMatter.title}
        />
        <meta
          name="og:description"
          content={frontMatter.description}
        />
      </Head>
    </>
    <nav>
      <Link href="/"><a>API Developer Portal</a></Link>
    </nav>
    <h2>{frontMatter.title}</h2>
    {children}
  </div>
}