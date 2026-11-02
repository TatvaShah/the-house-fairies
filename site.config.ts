import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "The House Fairies",
  tagline: "Home cleaning, laundry folding and organization in Milton, Georgetown, Brampton and Caledon.",
  category: "Home cleaning and organization",
  schemaType: "LocalBusiness",
  area: "Milton, Georgetown, Brampton and Caledon, ON",
  siteUrl: "https://the-house-fairies.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#cb416f", soft: "#f8e3e6" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Milton, Georgetown, Brampton and Caledon",
    headline: "Making home feel lighter",
    subhead: "Cleaning, laundry, organization and home resets from two hardworking mama fairies. No judgment, no stress. Send us a DM to book.",
    images: [
      { src: "/images/post-6.jpg", alt: "Closet before an organization reset" },
      { src: "/images/post-2.jpg", alt: "The House Fairies recurring cleaning" },
      { src: "/images/post-7-2.jpg", alt: "Sparkling clean bathroom after a deep clean" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/thehousefairies__" },
    secondaryCta: { label: "See our services", href: "#menu" },
  },

  highlights: ["Cleaning and home resets", "Laundry folding $20 per bag", "Two mama fairies", "Book by Instagram DM"],

  about: {
    title: "A little fairy magic goes a long way",
    body: [
      "We are The House Fairies, two hardworking mamas helping families in Milton, Georgetown, Brampton and Caledon fall in love with their space again.",
      "From overwhelming to oh so satisfying: less clutter, less stress, easier mornings and calmer evenings. Tell us what would make the biggest difference in your home and we will take it from there.",
    ],
    image: { src: "/images/post-1.jpg", alt: "The House Fairies getting homes ready for Christmas" },
  },

  menu: {
    label: "Services",
    title: "How we can help",
    variant: "list",
    groups: [
      {
        title: "Cleaning",
        note: "Quoted by DM",
        items: [
          { name: "Home cleaning", description: "A fresh, detailed clean for your space." },
          { name: "Recurring cleaning", description: "Keep everyday buildup in check with one less thing to think about." },
          { name: "Kitchen refresh", description: "Right down to the microwave interior." },
          { name: "Bathroom deep clean", description: "Toilet stains and hard water buildup to sparkling fixtures." },
        ],
      },
      {
        title: "Laundry",
        items: [
          { name: "Sort, fold and organize", description: "You bring it clean and completely dry. We sort it, fold it and organize it.", price: "$20 per bag" },
          { name: "In home laundry help", description: "Help with any step, from washing to that fitted sheet." },
        ],
      },
      {
        title: "Organization",
        note: "Quoted by DM",
        items: [
          { name: "Organization and home resets", description: "Cupboards, closets and the spaces that stress you out." },
        ],
      },
    ],
    priceNote: "Message us for a cleaning quote for your home and date.",
  },

  gallery: {
    title: "Before and after, fairy style",
    items: [
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Closet before", caption: "This starts your day with stress", href: IG + "DfIumnSkYUK/" },
      { src: "/images/post-6-2.jpg", width: 1080, height: 1350, alt: "Closet after", caption: "This starts your day with confidence", href: IG + "DfIumnSkYUK/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Bathroom before", caption: "Bathroom before", href: IG + "DfIouGBkc-O/" },
      { src: "/images/post-7-2.jpg", width: 1080, height: 1440, alt: "Bathroom after", caption: "Bathroom after", href: IG + "DfIouGBkc-O/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Appliance before", caption: "The difference is in the details", href: IG + "DfLZm27ETae/" },
      { src: "/images/post-4-2.jpg", width: 1080, height: 1440, alt: "Appliance after", caption: "Same space, big transformation", href: IG + "DfLZm27ETae/" },
      { src: "/images/post-11.jpg", width: 1080, height: 1349, alt: "Fold only laundry service", caption: "Fold only laundry, $20 per bag", href: IG + "DfBVOqJnEgG/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1339, alt: "Kitchen refresh", caption: "Kitchen refresh", href: IG + "DfGSoZbRgcf/" },
      { src: "/images/post-12.jpg", width: 1080, height: 1339, alt: "In home laundry help", caption: "In home laundry help", href: IG + "DfATWtZNAtF/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1339, alt: "Cupboard reset", caption: "A little cupboard reset", href: IG + "DfNkEzEtqMY/" },
    ],
  },

  instagram: {
    handle: "thehousefairies__",
    embeds: ["https://www.instagram.com/p/DfIouGBkc-O/"],
    embedsTitle: "Fresh from the fairies",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Tap the button to copy a starter message, then paste it into our Instagram chat. We will reply with a quote and availability.",
    dmMessage: "Hi House Fairies! I would love to book some help.\nService wanted (cleaning, laundry, organization, home reset):\nHome size (bedrooms and bathrooms):\nTown:\nPreferred date:",
    links: [],
    note: "Holiday season is filling up, so message early to secure your December clean.",
  },

  reviews: { items: [] },

  faq: [
    { q: "Where do you work?", a: "We serve Milton, Georgetown, Brampton and Caledon, Ontario." },
    { q: "How does laundry folding work?", a: "It is $20 per bag. You bring it clean and completely dry, and we sort, fold and organize it." },
    { q: "How do I book a clean?", a: "Send us a DM with the service you want, your home size, your town and your preferred date, and we will send a quote." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Milton, Georgetown, Brampton and Caledon, Ontario",
    socials: [{ label: "Find us on Google", href: "https://share.google/BJkfZ7GyyW6fNAM08" }],
  },

  seo: {
    title: "The House Fairies | Home cleaning in Milton and Brampton",
    description: "Home cleaning, laundry folding and organization in Milton, Georgetown, Brampton and Caledon, Ontario. Book your clean or home reset by Instagram DM.",
    keywords: ["house cleaning Milton", "cleaning Brampton", "laundry folding Georgetown", "home organization Caledon"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
