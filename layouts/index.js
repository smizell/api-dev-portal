import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Layout({ children, frontMatter }) {
  const { asPath } = useRouter();

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
        <meta name="og:url" content={`https://apidevportal.smizell.com${asPath}`} />
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