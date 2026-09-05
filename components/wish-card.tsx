import { ArrowUpRight, CheckCircle2, Heart, MapPin } from 'lucide-react'

type Wish = {
  title: string
  excerpt: string
  category: string
  location: string
  raised: number
  goal: number
  supporters: number
  verified?: boolean
  accent: 'violet' | 'blue' | 'cyan'
}

const accentClasses = {
  violet: 'from-primary/30 to-accent/50',
  blue: 'from-secondary/30 to-accent/50',
  cyan: 'from-secondary-light/25 to-accent/50',
}

export function WishCard({ wish }: { wish: Wish }) {
  const progress = Math.round((wish.raised / wish.goal) * 100)

  return (
    <article className="card group flex flex-col gap-5 transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:bg-accent/60">
      <div className={`relative flex h-40 items-end overflow-hidden rounded-md bg-gradient-to-br ${accentClasses[wish.accent]}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.22),transparent_28%)]" />
        <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/15 bg-white/5 blur-xl" />
        <div className="relative z-10 flex w-full items-center justify-between p-5">
          <span className="badge bg-background/60 text-primary-light">{wish.category}</span>
          {wish.verified && (
            <span className="flex items-center gap-1 text-xs text-white/80"><CheckCircle2 size={15} /> Verified</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl leading-tight text-white group-hover:text-primary-light">{wish.title}</h3>
          <ArrowUpRight className="shrink-0 text-primary-light" size={19} />
        </div>
        <p className="text-sm text-white/60">{wish.excerpt}</p>
        <div className="flex items-center gap-1 text-xs text-white/50"><MapPin size={14} />{wish.location}</div>
      </div>
      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-white">${wish.raised.toLocaleString()}</span>
          <span className="text-white/50">of ${wish.goal.toLocaleString()}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>{progress}% fulfilled</span>
          <span className="flex items-center gap-1"><Heart size={13} /> {wish.supporters} supporters</span>
        </div>
      </div>
    </article>
  )
}

export type { Wish }

export const wishes: Wish[] = [
  {
    title: 'A mobile recording studio for young artists',
    excerpt: 'Help us give the next generation a place to turn their voice into something real.',
    category: 'Community', location: 'Atlanta, GA', raised: 18400, goal: 24000, supporters: 128, verified: true, accent: 'violet',
  },
  {
    title: 'Launch my neighborhood food forest',
    excerpt: 'A living, shared garden for fresh food, learning, and deeper community roots.',
    category: 'Impact', location: 'Oakland, CA', raised: 8600, goal: 12000, supporters: 74, verified: true, accent: 'blue',
  },
  {
    title: 'A telescope to show kids the universe',
    excerpt: 'Make wonder accessible with a mobile astronomy lab for rural classrooms.',
    category: 'Education', location: 'Flagstaff, AZ', raised: 5200, goal: 7500, supporters: 46, accent: 'cyan',
  },
]

export function WishCardGrid({ items = wishes }: { items?: Wish[] }) {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map((wish) => <WishCard key={wish.title} wish={wish} />)}</div>
}
