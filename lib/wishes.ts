export type WishCategory = 'Education' | 'Creator' | 'Community' | 'Family' | 'Health' | 'Experience' | 'Build' | 'Wild'

export type Wish = {
  id: string
  title: string
  excerpt: string
  story: string
  category: WishCategory
  location: string
  raised: number
  goal: number
  supporters: number
  verified?: string
  accent: 'violet' | 'blue' | 'cyan'
  author: string
  createdAt: string
}

export const wishes: Wish[] = [
  { id: 'mobile-studio', title: 'Mobile recording studio for young artists', excerpt: 'Give the next generation a place to turn their voice into something real.', story: 'Our neighborhood has so much talent, but very few places where young artists can learn, record, and collaborate. This mobile studio will bring professional tools, mentors, and a safe creative space directly to schools and community centers across Atlanta.', category: 'Creator', location: 'Atlanta, GA', raised: 18400, goal: 24000, supporters: 128, verified: 'Community Verified', accent: 'violet', author: 'Maya Brooks', createdAt: '2026-05-18' },
  { id: 'food-forest', title: 'Neighborhood food forest', excerpt: 'A living, shared garden for fresh food, learning, and deeper community roots.', story: 'We are transforming an empty lot into a food forest that belongs to everyone. The space will grow vegetables, fruit, and herbs while giving neighbors a place to learn about food, soil, and one another.', category: 'Community', location: 'Oakland, CA', raised: 8600, goal: 12000, supporters: 74, verified: 'Impact Verified', accent: 'blue', author: 'Jordan Lee', createdAt: '2026-05-16' },
  { id: 'rural-telescope', title: 'Telescope for rural classrooms', excerpt: 'Make wonder accessible with a mobile astronomy lab for rural classrooms.', story: 'Every student should be able to look at the night sky through a real telescope. This portable setup will rotate through rural classrooms around Flagstaff and give students hands-on access to astronomy and science.', category: 'Education', location: 'Flagstaff, AZ', raised: 5200, goal: 7500, supporters: 46, verified: 'Education Verified', accent: 'cyan', author: 'Dr. Lena Park', createdAt: '2026-05-12' },
  { id: 'cs-laptop', title: 'Laptop for a CS degree', excerpt: 'A reliable computer to help one determined student finish what they started.', story: 'I am completing my computer science degree while working part time. My current laptop cannot run the tools required for my final projects, and a dependable replacement would let me stay on track and graduate.', category: 'Education', location: 'Detroit, MI', raised: 900, goal: 1200, supporters: 19, accent: 'blue', author: 'Noah Williams', createdAt: '2026-05-09' },
  { id: 'parent-trip', title: 'First international trip for a parent', excerpt: 'Help a parent experience the world they spent a lifetime helping others see.', story: 'My mother has spent decades putting everyone else first. I want to create her first international trip as a thank-you for the life and perspective she gave our family.', category: 'Family', location: 'Newark, NJ', raised: 3200, goal: 5000, supporters: 31, accent: 'violet', author: 'Amara Davis', createdAt: '2026-05-07' },
  { id: 'football-equipment', title: 'Community football equipment', excerpt: 'Keep a neighborhood team moving with safe, shared equipment.', story: 'Our community football team has outgrown its equipment. New balls, pads, cones, and training gear will keep more than 60 young people active and give volunteer coaches what they need.', category: 'Community', location: 'Birmingham, AL', raised: 2100, goal: 4000, supporters: 28, accent: 'cyan', author: 'Marcus Hill', createdAt: '2026-05-04' },
  { id: 'coding-academy', title: 'Free coding academy for 100 youth', excerpt: 'Build a free, practical learning path into technology for local young people.', story: 'This academy will offer a free 12-week program for 100 young people, with mentors, project-based learning, and a community demo day. The goal is not just to teach code, but to build confidence and options.', category: 'Build', location: 'Brooklyn, NY', raised: 14000, goal: 25000, supporters: 86, verified: 'Community Verified', accent: 'blue', author: 'Tariq Moore', createdAt: '2026-04-29' },
  { id: 'wheelchair-ramp', title: 'Wheelchair ramp for a local shop', excerpt: 'Make a beloved neighborhood shop accessible to every customer.', story: 'A small ramp and a safer entrance will make this independent neighborhood shop accessible to wheelchair users, parents with strollers, and older neighbors. It is a simple change with a lasting effect.', category: 'Community', location: 'Portland, OR', raised: 1800, goal: 2500, supporters: 24, accent: 'violet', author: 'Elena Garcia', createdAt: '2026-04-25' },
]

export function getWish(id: string) { return wishes.find((wish) => wish.id === id) }
export function progressFor(wish: Wish) { return Math.min(100, Math.round((wish.raised / wish.goal) * 100)) }
