import Link from 'next/link'
export default function NotFound() { return <main className="not-found"><span className="eyebrow">WISHFLOW / 404</span><h1>That wish is still waiting to be discovered.</h1><p>The page you are looking for does not exist or has moved.</p><Link href="/discover" className="button-primary">Discover wishes →</Link></main> }
