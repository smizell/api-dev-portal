import Link from 'next/link'

export default function Layout({ children }) {
  return <div className="page">
    <nav>
      <Link href="/"><a>API Developer Portal</a></Link>
    </nav>
    {children}
  </div>
}