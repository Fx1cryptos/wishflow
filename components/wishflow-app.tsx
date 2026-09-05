'use client'

import { useState } from 'react'
import { ArrowRight, Compass, Heart, Menu, Plus, ShieldCheck, Sparkles, Users, X, Zap } from 'lucide-react'
import { WishCardGrid } from './wish-card'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WISHFLOW-wMCoEvcI5m7PCmLeeifaNRlr4iaTEY.jpg'

export default function WishflowApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Trending')
  const filters = ['Trending', 'New', 'Almost fulfilled', 'Verified']

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 text-white no-underline">
            <img src={logoUrl} alt="WISHFLOW logo" className="h-11 w-8 rounded-md object-cover object-top" />
            <span className="text-lg font-semibold tracking-[0.24em]">WISHFLOW</span>
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#discover" className="text-white/70 hover:text-white">Discover</a>
            <a href="#how-it-works" className="text-white/70 hover:text-white">How it works</a>
            <a href="#stories" className="text-white/70 hover:text-white">Stories</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button className="button-ghost">Sign in</button>
            <button className="button-primary flex items-center gap-2">Make a wish <ArrowRight size={16} /></button>
          </div>
          <button aria-label="Toggle menu" className="button-ghost md:hidden" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="container flex flex-col gap-4 border-t border-white/10 py-5 md:hidden"><a href="#discover" onClick={() => setMenuOpen(false)}>Discover</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><button className="button-primary">Make a wish</button></div>}
      </header>

      <main id="top">
        <section className="relative section flex min-h-[640px] items-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_35%_70%,rgba(139,92,246,0.15),transparent_38%)]" />
          <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7">
              <span className="badge w-fit gap-2"><Sparkles size={15} /> The future of generosity</span>
              <h1 className="max-w-3xl text-balance text-white">Make a wish.<br /><span className="gradient-text">Let possibility find you.</span></h1>
              <p className="max-w-2xl text-lg text-white/65">WISHFLOW is where genuine wishes meet the people who can make them happen. Share what matters. Discover what moves you. Create possibility together.</p>
              <div className="flex flex-wrap gap-4"><button className="button-primary flex items-center gap-2">Make a wish <ArrowRight size={17} /></button><button className="button-secondary flex items-center gap-2"><Compass size={17} /> Explore wishes</button></div>
              <div className="flex flex-wrap gap-7 pt-5 text-sm text-white/55"><span className="flex items-center gap-2"><ShieldCheck className="text-primary-light" size={17} /> Trust is the product</span><span className="flex items-center gap-2"><Users className="text-secondary-light" size={17} /> Built by community</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-accent/40 p-2 shadow-2xl shadow-secondary/20">
                <img src={logoUrl} alt="WISHFLOW brand mark" className="aspect-[0.67] w-full rounded-xl object-cover" />
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-xl border border-white/10 bg-background/75 p-4 backdrop-blur-xl"><div><p className="text-xs uppercase tracking-[0.2em] text-white/45">A shared future</p><p className="mt-1 text-sm text-white">One wish can move everything.</p></div><Zap className="text-primary-light" size={22} /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="discover" className="section border-t border-white/10 bg-black/10"><div className="container flex flex-col gap-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="flex flex-col gap-3"><span className="badge w-fit">Discover possibility</span><h2 className="text-white">Wishes worth moving for.</h2><p className="max-w-xl text-white/60">Explore the ideas, dreams, and meaningful moments the WISHFLOW community is bringing into focus.</p></div><button className="button-ghost flex w-fit items-center gap-2">View all wishes <ArrowRight size={16} /></button></div><div className="flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${activeFilter === filter ? 'border-primary bg-primary/15 text-primary-light' : 'border-white/10 text-white/55 hover:border-primary/40 hover:text-white'}`}>{filter}</button>)}</div><WishCardGrid /></div></section>

        <section id="how-it-works" className="section"><div className="container flex flex-col gap-12"><div className="max-w-2xl"><span className="badge">From thought to real</span><h2 className="mt-4 text-white">A simpler way to create change.</h2></div><div className="grid gap-6 md:grid-cols-3"><Step icon={<Plus />} number="01" title="Make a wish" text="Name the thing you cannot stop thinking about. Make it clear, human, and yours." /><Step icon={<Compass />} number="02" title="Find your people" text="Let possibility find you through a community looking for meaningful ways to help." /><Step icon={<Heart />} number="03" title="Make it happen" text="Support a wish, connect with its creator, and turn a hopeful idea into a real story." /></div></div></section>

        <section id="stories" className="section border-y border-white/10 bg-accent/20"><div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><span className="badge">The WISHFLOW belief</span><blockquote className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">“Some ideas are too powerful to stay in someone&apos;s head.”</blockquote><p className="mt-6 max-w-lg text-white/60">The internet made information accessible. Social media made attention accessible. WISHFLOW explores what happens when generosity becomes discoverable.</p></div><div className="card flex flex-col gap-7"><div className="flex items-center justify-between"><span className="text-sm text-white/50">Community pulse</span><span className="flex items-center gap-2 text-sm text-primary-light"><span className="size-2 rounded-full bg-primary" /> Live now</span></div><div className="grid grid-cols-2 gap-6"><Stat value="2.4k" label="wishes shared" /><Stat value="$184k" label="possibility unlocked" /><Stat value="91%" label="community trust" /><Stat value="38" label="wishes fulfilled" /></div><div className="h-px bg-white/10" /><p className="text-sm text-white/60">Every number is a person, a promise, or a possibility waiting to move.</p></div></div></section>
      </main>

      <footer className="border-t border-white/10 py-10"><div className="container flex flex-col items-center justify-between gap-5 text-sm text-white/40 md:flex-row"><div className="flex items-center gap-3"><img src={logoUrl} alt="WISHFLOW" className="h-8 w-6 rounded object-cover object-top" /><span>© 2026 WISHFLOW. Make possibility discoverable.</span></div><div className="flex gap-6"><a href="#top" className="text-white/40 hover:text-white">Privacy</a><a href="#top" className="text-white/40 hover:text-white">Terms</a><a href="#top" className="text-white/40 hover:text-white">Trust & safety</a></div></div></footer>
    </div>
  )
}

function Step({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) {
  return <div className="card flex flex-col gap-5"><div className="flex items-center justify-between text-primary-light"><div className="flex size-11 items-center justify-center rounded-lg bg-primary/15">{icon}</div><span className="font-mono text-sm text-white/30">{number}</span></div><h3 className="text-white">{title}</h3><p className="text-white/55">{text}</p></div>
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="flex flex-col gap-1"><strong className="text-3xl text-white">{value}</strong><span className="text-sm text-white/45">{label}</span></div>
}
