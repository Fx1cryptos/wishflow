'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bell, Menu, Search, X } from 'lucide-react'
import type { Wish } from '@/lib/wishes'
import { progressFor } from '@/lib/wishes'

export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WISHFLOW-wMCoEvcI5m7PCmLeeifaNRlr4iaTEY.jpg'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container"><div className="header-bar"><Link href="/" className="brand-lockup" aria-label="WISHFLOW home"><span className="brand-mark"><img src={logoUrl} alt="" /></span><span className="brand-copy"><strong>WISHFLOW</strong><small>Where wishes become reality.</small></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link className="nav-link" href="/discover">Discover</Link><Link className="nav-link" href="/#how">How it works</Link><Link className="nav-link" href="/#stories">Stories</Link></nav><div className="header-actions"><Link href="/discover" className="icon-button" aria-label="Search"><Search size={18} /></Link><button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><span className="notification-dot" /></button><Link href="/auth" className="button-ghost sign-in">Sign in</Link><Link href="/create" className="button-primary header-cta">Make a wish <span aria-hidden="true">→</span></Link></div><button aria-label={open ? 'Close menu' : 'Open menu'} className="mobile-menu-button" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-nav"><Link href="/discover" onClick={() => setOpen(false)}>Discover</Link><Link href="/#how" onClick={() => setOpen(false)}>How it works</Link><Link href="/#stories" onClick={() => setOpen(false)}>Stories</Link><div className="mobile-nav-actions"><Link href="/auth" className="button-ghost">Sign in</Link><Link href="/create" className="button-primary">Make a wish →</Link></div></div>}</div></header>
}

export function SiteFooter() { return <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark small"><img src={logoUrl} alt="" /></span><span>© 2026 WISHFLOW. Where Wishes Become Reality.</span></div><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/safety">Trust & safety</Link></div></div></footer> }

export function ProgressBar({ wish }: { wish: Wish }) { return <div className="progress-track"><div className="progress-fill" style={{ width: `${progressFor(wish)}%` }} /></div> }

export function WishCard({ wish }: { wish: Wish }) { const progress = progressFor(wish); return <Link href={`/w/${wish.id}`} className="wish-card group"><div className={`wish-cover cover-${wish.accent}`}><div className="wish-cover-art" /><div className="wish-cover-meta"><span className="badge">{wish.category}</span>{wish.verified && <span className="verified">✓ {wish.verified}</span>}</div></div><div className="wish-card-body"><div className="wish-card-title"><h3>{wish.title}</h3><span aria-hidden="true">↗</span></div><p>{wish.excerpt}</p><div className="wish-location">⌖ {wish.location}</div><div className="wish-card-stats"><strong>${wish.raised.toLocaleString()}</strong><span>of ${wish.goal.toLocaleString()}</span></div><ProgressBar wish={wish} /><div className="wish-card-foot"><span>{progress}% fulfilled</span><span>{wish.supporters} supporters</span></div></div></Link> }

export function WishGrid({ items }: { items: Wish[] }) { return <div className="wish-grid">{items.map((wish) => <WishCard key={wish.id} wish={wish} />)}</div> }

export function PageFrame({ children, title, description }: { children: React.ReactNode; title: string; description?: string }) { return <><SiteHeader /><main className="page-main"><div className="container page-heading"><span className="eyebrow">WISHFLOW</span><h1>{title}</h1>{description && <p>{description}</p>}</div>{children}</main><SiteFooter /></> }
