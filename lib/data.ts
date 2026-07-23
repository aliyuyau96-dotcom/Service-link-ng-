import {
  Wrench,
  UtensilsCrossed,
  Scale,
  Zap,
  Sun,
  Scissors,
  Stethoscope,
  Droplets,
  Sparkles,
  Hammer,
  Brush,
  type LucideIcon,
} from "lucide-react"

export type CategoryId =
  | "mechanics"
  | "restaurants"
  | "lawyers"
  | "electricians"
  | "solar"
  | "tailors"
  | "doctors"
  | "plumbers"
  | "cleaners"
  | "carpenters"
  | "stylists"

export interface Category {
  id: CategoryId
  name: string
  singular: string
  icon: LucideIcon
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: "mechanics",
    name: "Mechanics",
    singular: "Mechanic",
    icon: Wrench,
    description: "Car repairs, diagnostics & servicing",
    image: "/images/mechanic.png",
  },
  {
    id: "electricians",
    name: "Electricians",
    singular: "Electrician",
    icon: Zap,
    description: "Wiring, repairs & installations",
    image: "/images/electrician.png",
  },
  {
    id: "solar",
    name: "Solar Installers",
    singular: "Solar Installer",
    icon: Sun,
    description: "Solar & inverter installation",
    image: "/images/solar.png",
  },
  {
    id: "plumbers",
    name: "Plumbers",
    singular: "Plumber",
    icon: Droplets,
    description: "Pipes, leaks & fittings",
    image: "/images/plumber.png",
  },
  {
    id: "doctors",
    name: "Doctors",
    singular: "Doctor",
    icon: Stethoscope,
    description: "Clinics & home consultations",
    image: "/images/doctor.png",
  },
  {
    id: "lawyers",
    name: "Lawyers",
    singular: "Lawyer",
    icon: Scale,
    description: "Legal advice & representation",
    image: "/images/lawyer.png",
  },
  {
    id: "tailors",
    name: "Tailors",
    singular: "Tailor",
    icon: Scissors,
    description: "Custom outfits & alterations",
    image: "/images/tailor.png",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    singular: "Restaurant",
    icon: UtensilsCrossed,
    description: "Local dishes & catering",
    image: "/images/restaurant.png",
  },
  {
    id: "cleaners",
    name: "Cleaners",
    singular: "Cleaner",
    icon: Sparkles,
    description: "Home & office cleaning",
    image: "/images/cleaner.png",
  },
  {
    id: "carpenters",
    name: "Carpenters",
    singular: "Carpenter",
    icon: Hammer,
    description: "Furniture & woodwork",
    image: "/images/carpenter.png",
  },
  {
    id: "stylists",
    name: "Hair & Beauty",
    singular: "Stylist",
    icon: Brush,
    description: "Salons, braids & grooming",
    image: "/images/stylist.png",
  },
]

export const states: string[] = [
  "Lagos",
  "FCT - Abuja",
  "Rivers",
  "Oyo",
  "Kano",
  "Enugu",
  "Kaduna",
  "Ogun",
  "Delta",
  "Anambra",
]

export interface Review {
  author: string
  rating: number
  date: string
  comment: string
}

export interface Provider {
  id: string
  name: string
  categoryId: CategoryId
  tagline: string
  about: string
  rating: number
  reviewCount: number
  state: string
  city: string
  verified: boolean
  priceRange: string
  responseTime: string
  yearsExperience: number
  jobsCompleted: number
  phone: string
  hours: string
  image: string
  services: string[]
  reviews: Review[]
}

function makeReviews(seed: string[]): Review[] {
  const authors = [
    "Chinedu O.",
    "Aisha B.",
    "Tunde A.",
    "Ngozi E.",
    "Emeka N.",
    "Fatima S.",
    "Bola A.",
    "Ifeoma U.",
  ]
  const dates = ["2 weeks ago", "1 month ago", "3 months ago", "5 months ago"]
  return seed.map((comment, i) => ({
    author: authors[i % authors.length],
    rating: i === seed.length - 1 ? 4 : 5,
    date: dates[i % dates.length],
    comment,
  }))
}

export const providers: Provider[] = [
  {
    id: "autopro-lagos",
    name: "AutoPro Motors",
    categoryId: "mechanics",
    tagline: "Certified auto repair & diagnostics",
    about:
      "AutoPro Motors is a fully-equipped auto workshop in Ikeja with certified technicians. We handle everything from routine servicing to complex engine diagnostics, using modern equipment and genuine parts.",
    rating: 4.9,
    reviewCount: 214,
    state: "Lagos",
    city: "Ikeja",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Under 1 hour",
    yearsExperience: 12,
    jobsCompleted: 1800,
    phone: "+234 803 123 4567",
    hours: "Mon–Sat, 8am – 6pm",
    image: "/images/mechanic.png",
    services: ["Engine diagnostics", "Brake repairs", "AC servicing", "Oil change", "Suspension work"],
    reviews: makeReviews([
      "Fixed my Corolla's engine fault the same day. Honest pricing and very professional.",
      "They diagnosed a problem two other mechanics missed. Highly recommend AutoPro.",
      "Great service and they explained everything clearly before charging me.",
    ]),
  },
  {
    id: "brightspark-electric",
    name: "BrightSpark Electricals",
    categoryId: "electricians",
    tagline: "Licensed electrical repairs & wiring",
    about:
      "BrightSpark is a licensed electrical contractor serving homes and businesses across Lagos. Safety-first wiring, fault-finding and panel upgrades handled by fully certified electricians.",
    rating: 4.8,
    reviewCount: 156,
    state: "Lagos",
    city: "Lekki",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Under 2 hours",
    yearsExperience: 9,
    jobsCompleted: 1200,
    phone: "+234 806 234 5678",
    hours: "Mon–Sun, 7am – 8pm",
    image: "/images/electrician.png",
    services: ["House rewiring", "Fault finding", "Meter installation", "Lighting", "Generator changeover"],
    reviews: makeReviews([
      "Sorted out a dangerous wiring issue in my flat quickly. Very knowledgeable.",
      "Punctual, neat and reasonably priced. Will use again.",
      "Installed my changeover switch perfectly. Clean work.",
    ]),
  },
  {
    id: "sunfield-solar",
    name: "SunField Solar",
    categoryId: "solar",
    tagline: "Solar & inverter systems that last",
    about:
      "SunField designs and installs reliable solar and inverter systems for homes and small businesses. We size your system correctly, use quality panels and offer after-sales support.",
    rating: 4.9,
    reviewCount: 98,
    state: "FCT - Abuja",
    city: "Gwarinpa",
    verified: true,
    priceRange: "₦₦₦",
    responseTime: "Same day",
    yearsExperience: 7,
    jobsCompleted: 640,
    phone: "+234 809 345 6789",
    hours: "Mon–Sat, 8am – 5pm",
    image: "/images/solar.png",
    services: ["Solar installation", "Inverter setup", "Battery replacement", "System sizing", "Maintenance"],
    reviews: makeReviews([
      "No more generator noise! My 5kVA system has been flawless for months.",
      "They took time to size the system right. Great value and support.",
      "Professional install and tidy cabling. Very happy.",
    ]),
  },
  {
    id: "flowmaster-plumbing",
    name: "FlowMaster Plumbing",
    categoryId: "plumbers",
    tagline: "Fast, clean plumbing solutions",
    about:
      "FlowMaster handles leaks, blockages, installations and full bathroom plumbing. Quick response and no-mess workmanship for homes and offices in Port Harcourt.",
    rating: 4.7,
    reviewCount: 87,
    state: "Rivers",
    city: "Port Harcourt",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Under 3 hours",
    yearsExperience: 8,
    jobsCompleted: 900,
    phone: "+234 812 456 7890",
    hours: "Mon–Sun, 7am – 9pm",
    image: "/images/plumber.png",
    services: ["Leak repairs", "Drain unblocking", "Toilet installation", "Water heater setup", "Pipe fitting"],
    reviews: makeReviews([
      "Came within two hours and fixed a burst pipe. Lifesaver.",
      "Neat work and fair price. No mess left behind.",
      "Reliable and polite. Recommended for plumbing jobs.",
    ]),
  },
  {
    id: "wellcare-clinic",
    name: "WellCare Family Clinic",
    categoryId: "doctors",
    tagline: "Trusted family medicine & home visits",
    about:
      "WellCare offers general consultations, home visits and telemedicine with experienced, registered doctors. Compassionate care for the whole family in Ibadan.",
    rating: 4.9,
    reviewCount: 132,
    state: "Oyo",
    city: "Ibadan",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Same day",
    yearsExperience: 15,
    jobsCompleted: 5000,
    phone: "+234 815 567 8901",
    hours: "Mon–Sun, 24 hours",
    image: "/images/doctor.png",
    services: ["General consultation", "Home visits", "Telemedicine", "Health checks", "Child wellness"],
    reviews: makeReviews([
      "Dr. was patient and thorough. Home visit was a huge help for my mum.",
      "Quick appointment and clear advice. Very professional clinic.",
      "Caring staff and clean facility. Trustworthy.",
    ]),
  },
  {
    id: "justice-partners",
    name: "Justice & Partners",
    categoryId: "lawyers",
    tagline: "Practical legal advice you can trust",
    about:
      "Justice & Partners is a boutique law firm advising on property, business contracts and family law. Clear, honest counsel with transparent fees.",
    rating: 4.8,
    reviewCount: 64,
    state: "FCT - Abuja",
    city: "Wuse 2",
    verified: true,
    priceRange: "₦₦₦",
    responseTime: "Within 24 hours",
    yearsExperience: 18,
    jobsCompleted: 420,
    phone: "+234 817 678 9012",
    hours: "Mon–Fri, 9am – 5pm",
    image: "/images/lawyer.png",
    services: ["Property law", "Business contracts", "Family law", "Legal drafting", "Dispute resolution"],
    reviews: makeReviews([
      "Handled my land documentation smoothly and explained every step.",
      "Honest about my options and fees upfront. Rare and appreciated.",
      "Professional and responsive throughout my case.",
    ]),
  },
  {
    id: "stitchwell-tailors",
    name: "StitchWell Couture",
    categoryId: "tailors",
    tagline: "Custom Ankara & tailored fits",
    about:
      "StitchWell creates bespoke traditional and contemporary outfits with a perfect fit. From Ankara styles to corporate wear, delivered on time for your big day.",
    rating: 4.9,
    reviewCount: 176,
    state: "Anambra",
    city: "Onitsha",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Within 24 hours",
    yearsExperience: 10,
    jobsCompleted: 2200,
    phone: "+234 818 789 0123",
    hours: "Mon–Sat, 9am – 7pm",
    image: "/images/tailor.png",
    services: ["Custom outfits", "Ankara styles", "Alterations", "Bridal wear", "Corporate wear"],
    reviews: makeReviews([
      "My wedding guest outfit fit perfectly and was ready early. Beautiful work.",
      "Great attention to detail and lovely finishing.",
      "Delivered exactly what I asked for. My go-to tailor now.",
    ]),
  },
  {
    id: "mamaput-kitchen",
    name: "Mama's Pot Kitchen",
    categoryId: "restaurants",
    tagline: "Authentic Nigerian dishes & catering",
    about:
      "Mama's Pot serves rich, home-style Nigerian meals and offers catering for events. Jollof rice, soups and grills made fresh daily with quality ingredients.",
    rating: 4.7,
    reviewCount: 320,
    state: "Lagos",
    city: "Yaba",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Under 1 hour",
    yearsExperience: 6,
    jobsCompleted: 8000,
    phone: "+234 819 890 1234",
    hours: "Mon–Sun, 10am – 10pm",
    image: "/images/restaurant.png",
    services: ["Dine-in", "Takeaway", "Event catering", "Small chops", "Bulk orders"],
    reviews: makeReviews([
      "Best jollof in Yaba, no debate. Catering for my event was a hit.",
      "Generous portions and great flavour. Fast delivery too.",
      "Tasty food and friendly service every time.",
    ]),
  },
  {
    id: "sparkle-clean",
    name: "Sparkle Clean Services",
    categoryId: "cleaners",
    tagline: "Spotless homes & offices",
    about:
      "Sparkle Clean provides trained cleaning teams for homes, offices and post-construction cleanups. Fully vetted staff and eco-friendly products.",
    rating: 4.8,
    reviewCount: 109,
    state: "Lagos",
    city: "Victoria Island",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Same day",
    yearsExperience: 5,
    jobsCompleted: 1500,
    phone: "+234 802 901 2345",
    hours: "Mon–Sat, 7am – 7pm",
    image: "/images/cleaner.png",
    services: ["Home cleaning", "Office cleaning", "Deep cleaning", "Post-construction", "Fumigation"],
    reviews: makeReviews([
      "My apartment has never looked better. Thorough and trustworthy team.",
      "Reliable weekly cleaning. Staff are polite and careful.",
      "Great deep clean before we moved in. Worth it.",
    ]),
  },
  {
    id: "woodcraft-carpentry",
    name: "WoodCraft Carpentry",
    categoryId: "carpenters",
    tagline: "Custom furniture & fittings",
    about:
      "WoodCraft builds durable, beautiful furniture and fitted wardrobes to order. Quality timber, precise joinery and finishes that last.",
    rating: 4.8,
    reviewCount: 73,
    state: "Enugu",
    city: "Independence Layout",
    verified: false,
    priceRange: "₦₦",
    responseTime: "Within 24 hours",
    yearsExperience: 14,
    jobsCompleted: 540,
    phone: "+234 803 012 3456",
    hours: "Mon–Sat, 8am – 6pm",
    image: "/images/carpenter.png",
    services: ["Custom furniture", "Fitted wardrobes", "Kitchen cabinets", "Repairs", "Wood finishing"],
    reviews: makeReviews([
      "Built a solid wardrobe exactly to my spec. Excellent craftsmanship.",
      "Great quality and fair price. Delivered when promised.",
      "Lovely dining table. Very skilled carpenter.",
    ]),
  },
  {
    id: "glow-beauty",
    name: "Glow Beauty Studio",
    categoryId: "stylists",
    tagline: "Hair, braids & grooming experts",
    about:
      "Glow Beauty Studio offers styling, braids, treatments and grooming in a relaxing salon. Skilled stylists and hygienic tools for every look.",
    rating: 4.9,
    reviewCount: 245,
    state: "Kaduna",
    city: "Barnawa",
    verified: true,
    priceRange: "₦₦",
    responseTime: "Same day",
    yearsExperience: 8,
    jobsCompleted: 3400,
    phone: "+234 806 123 4567",
    hours: "Tue–Sun, 9am – 8pm",
    image: "/images/stylist.png",
    services: ["Braiding", "Hair treatment", "Styling", "Barbering", "Home appointments"],
    reviews: makeReviews([
      "My braids lasted weeks and looked amazing. Lovely studio.",
      "Professional and friendly stylists. Always leave happy.",
      "Great grooming service and clean environment.",
    ]),
  },
  {
    id: "citymech-abuja",
    name: "CityMech Garage",
    categoryId: "mechanics",
    tagline: "Honest car care in Abuja",
    about:
      "CityMech is a trusted neighbourhood garage offering transparent servicing and repairs. We fix it right the first time and keep you informed.",
    rating: 4.6,
    reviewCount: 91,
    state: "FCT - Abuja",
    city: "Garki",
    verified: false,
    priceRange: "₦₦",
    responseTime: "Under 2 hours",
    yearsExperience: 10,
    jobsCompleted: 760,
    phone: "+234 809 234 5678",
    hours: "Mon–Sat, 8am – 6pm",
    image: "/images/mechanic.png",
    services: ["General servicing", "Electrical faults", "Tyre change", "Battery replacement", "Diagnostics"],
    reviews: makeReviews([
      "Honest assessment and didn't overcharge. Refreshing.",
      "Quick tyre change and battery check. Good guys.",
      "Reliable servicing for my SUV.",
    ]),
  },
]

export function getProvider(id: string): Provider | undefined {
  return providers.find((p) => p.id === id)
}

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function providerCountByCategory(id: CategoryId): number {
  return providers.filter((p) => p.categoryId === id).length
}
