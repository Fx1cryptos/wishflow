'use client'

import { useState } from 'react'
import { ArrowRight, Bell, Check, Compass, Heart, Menu, Plus, Search, ShieldCheck, Sparkles, Users, X, Zap } from 'lucide-react'
import { WishCardGrid } from './wish-card'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WISHFLOW-wMCoEvcI5m7PCmLeeifaNRlr4iaTEY.jpg'
const filters = ['Trending', 'New', 'Almost fulfilled', 'Verified']

export default function WishflowApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Trending')
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="site-header">
        <div className="container">
          <div className="header-bar">
            <a href="#top" className="brand-lockup" aria-label="WISHFLOW home">
              <span className="brand-mark"><img src={logoUrl} alt="" /></span>
              <span className="brand-copy"><strong>WISHFLOW</strong><small>Make possibility visible</small></span>
            </a>
            <nav className="desktop-nav" aria-label="Primary navigation">
              <a className="nav-link active" href="#discover">Discover</a>
              <a className="nav-link" href="#how-it-works">How it works</a>
              <a className="nav-link" href="#stories">Stories</a>
            </nav>
            <div className="header-actions">
              <button className="icon-button" aria-label="Search"><Search size={18} /></button>
              <button className="icon-button" aria-label="Notifications"><Bell size={18} /></button>
              <button className="button-ghost sign-in">Sign in</button>
              <button className="button-primary header-cta">Make a wish <ArrowRight size={16} /></button>
            </div>
            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="mobile-menu-button" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
          {menuOpen && <div className="mobile-nav"><a href="#discover" onClick={() => setMenuOpen(false)}>Discover</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a><div className="mobile-nav-actions"><button className="button-ghost">Sign in</button><button className="button-primary">Make a wish <ArrowRight size={16} /></button></div></div>}
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><Sparkles size={14} /> The future of generosity</span>
              <h1>Make a wish.<br /><span className="gradient-text">Let possibility find you.</span></h1>
              <p className="hero-lede">WISHFLOW is where genuine wishes meet the people who can make them happen. Share what matters. Discover what moves you. Create possibility together.</p>
              <div className="hero-actions"><button className="button-primary">Make a wish <ArrowRight size={17} /></button><button className="button-secondary"><Compass size={17} /> Explore wishes</button></div>
              <div className="trust-row"><span><ShieldCheck size={16} /> Trust is the product</span><span><Users size={16} /> Built by community</span></div>
            </div>
            <div className="hero-visual"><div className="visual-ring" /><div className="logo-panel"><img src={logoUrl} alt="WISHFLOW blue and violet logo" /><div className="logo-caption"><div><small>A shared future</small><strong>One wish can move everything.</strong></div><Zap size={21} /></div></div></div>
          </div>
        </section>

        <section id="discover" className="section discovery-section"><div className="container section-stack"><div className="section-heading"><div><span className="eyebrow">Discover possibility</span><h2>Wishes worth moving for.</h2><p>Explore the ideas, dreams, and meaningful moments the WISHFLOW community is bringing into focus.</p></div><button className="button-ghost section-link">View all wishes <ArrowRight size={16} /></button></div><div className="filter-row" role="tablist" aria-label="Wish filters">{filters.map((filter) => <button key={filter} role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? 'filter-chip selected' : 'filter-chip'}>{activeFilter === filter && <Check size={14} />}{filter}</button>)}</div><WishCardGrid /></div></section>

        <section id="how-it-works" className="section"><div className="container section-stack"><div className="section-heading compact"><div><span className="eyebrow">From thought to real</span><h2>A simpler way to create change.</h2></div></div><div className="step-grid"><Step icon={<Plus />} number="01" title="Make a wish" text="Name the thing you cannot stop thinking about. Make it clear, human, and yours." /><Step icon={<Compass />} number="02" title="Find your people" text="Let possibility find you through a community looking for meaningful ways to help." /><Step icon={<Heart />} number="03" title="Make it happen" text="Support a wish, connect with its creator, and turn a hopeful idea into a real story." /></div></div></section>

        <section id="stories" className="belief-section"><div className="container belief-grid"><div><span className="eyebrow">The WISHFLOW belief</span><blockquote>“Some ideas are too powerful to stay in someone&apos;s head.”</blockquote><p>WISHFLOW explores what happens when generosity becomes discoverable.</p></div><div className="pulse-card"><div className="pulse-header"><span>Community pulse</span><span className="live"><i /> Live now</span></div><div className="stat-grid"><Stat value="2.4k" label="wishes shared" /><Stat value="$184k" label="possibility unlocked" /><Stat value="91%" label="community trust" /><Stat value="38" label="wishes fulfilled" /></div><div className="card-rule" /><p>Every number is a person, a promise, or a possibility waiting to move.</p></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark small"><img src={logoUrl} alt="" /></span><span>© 2026 WISHFLOW. Make possibility discoverable.</span></div><div className="footer-links"><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Trust & safety</a></div></div></footer>
    </div>
  )
}

function Step({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) { return <article className="step-card"><div className="step-top"><span className="step-icon">{icon}</span><span className="step-number">{number}</span></div><h3>{title}</h3><p>{text}</p></article> }
function Stat({ value, label }: { value: string; label: string }) { return <div className="stat"><strong>{value}</strong><span>{label}</span></div> }
