// English translations for Hort!
import { Translations } from "./i18n";

export const en: Translations = {
  nav: {
    product: "Product",
    tech: "Technology",
    models: "Models",
    sustainability: "Sustainability",
    maintenance: "Maintenance",
    packaging: "Packaging",
    contact: "Contact",
    discover: "Discover",
  },
  hero: {
    title: "Hort!",
    claim: "Automatic urban gardens to eat better, without worrying.",
    subtext:
      "We design smart gardens that take care of the plants for you. You simply enjoy the harvest.",
    primaryCta: "Discover",
    secondaryCta: "See models",
    badge: "Eco-tech premium · Barcelona",
    tagline: "Invisible tech, closer food.",
  },
  problem: {
    title: "Eating better should be easy.",
    bullets: [
      "No time to learn urban gardening.",
      "Fear of plants dying without constant care.",
      "Apartments with little light or limited space.",
      "We don’t want to add extra chores to your routine.",
    ],
  },
  solution: {
    title: "A garden that takes care of everything.",
    text:
      "Hort! regulates water, light, and nutrients automatically. You choose what to grow; the system handles the rest.",
    highlight: "If you forget about it, Hort! keeps working.",
    items: [
      "Smart, silent watering.",
      "Light adjusted to each plant.",
      "Control and alerts from the app.",
      "Maximum optimization and efficiency.",
    ],
    label: "Hort! · product",
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Place the plants",
        description: "Ready in minutes with our capsules.",
      },
      {
        title: "Hort manages",
        description: "Sensors adjust water, light, and nutrients for you.",
      },
      {
        title: "App notifications",
        description: "It only pings you when something specific is needed.",
      },
      {
        title: "Harvest",
        description: "Fresh shoots and herbs ready for your kitchen.",
      },
    ],
  },
  tech: {
    title: "Technology you don't see, but you feel.",
    subtitle: "All the complexity happens in the background.",
    cards: [
      { title: "Sensors", description: "Humidity, light, and nutrients calibrated for each crop." },
      { title: "Automation", description: "Microcontrollers manage water and light without you." },
      { title: "AI + App", description: "Algorithms learn your habits and only alert when it matters." },
    ],
    appCopy: "The product that works for you.",
    status: [
      { label: "Light", value: "Auto · 12h" },
      { label: "Water", value: "Ready · silent" },
      { label: "Nutrients", value: "Micro-dosing" },
    ],
    bottomNote: "Minimal notifications, only when needed.",
  },
  models: {
    title: "Models",
    subtitle: "Two sizes, the same automatic experience.",
    priceLabel: "Price",
    cards: [
      {
        name: "Hort! 10",
        plants: "10 plants",
        price: "239.95 €",
        cta: "Discover",
        image: "/assets/product-10.jpg",
      },
      {
        name: "Hort! 6",
        plants: "6 plants",
        price: "139.95 €",
        cta: "Discover",
        image: "/assets/product-6.jpg",
      },
    ],
  },
  sustainability: {
    title: "Honest sustainability",
    bullets: [
      "Water savings versus traditional watering.",
      "Hydroponic, soil-free growing with fewer residues.",
      "Local production, no unnecessary transport.",
      "Components designed to last and be repaired.",
    ],
  },
  ecosystem: {
    title: "Hort! ecosystem",
    subtitle: "A scalable brand with refills and new varieties.",
    items: [
      { title: "Refills", description: "Capsules and nutrients ready to use." },
      { title: "Kits", description: "Seasonal selections to rotate crops." },
      { title: "New varieties", description: "Try leaves, shoots, and edible flowers." },
    ],
  },
  maintenance: {
    title: "Replacements and maintenance",
    subtitle: "Everything you need for Hort to work perfectly, without complications.",
    cards: {
      replacements: {
        title: "Replacements",
        description:
          "Original parts and consumables (pumps, filters, seed holders, etc.) whenever you need them.",
        cta: "View replacements",
        image: "/assets/recanvis.jpg",
        placeholder: "Replacements image",
      },
      cleaning: {
        title: "Cleaning",
        description: "Cleaning kit to do it fast anytime, without the mess.",
        image: "/assets/neteja.jpg",
        placeholder: "Cleaning image",
        cta: "View kit",
      },
      subscription: {
        title: "Maintenance subscription",
        price: "10€ / month",
        note: "Shipping included",
        bullets: [
          "Key consumables and parts right when needed",
          "Reminders and recommendations from the app",
          "Everything set so you forget it and it still works",
        ],
        ctaPrimary: "Activate subscription",
        ctaSecondary: "What’s included?",
      },
    },
  },
  design: {
    title: "Design made for the home",
    subtitle: "Premium product, premium materials.",
    note: "Ready for maintenance at any time.",
    imageAlt: "Warm materials and soft light at home.",
    tags: ["Warm light", "Cared materials", "Ready for any home"],
  },
  packaging: {
    title: "Packaging designed to protect the product",
    subtitle:
      "A carefully designed, sturdy package made to make the first contact with Hort! feel special.",
    bullets: [
      "Premium, recyclable materials.",
      "Presentation made to arrive perfectly.",
      "A kind experience from the moment you open the box.",
    ],
    imageAlt: "Carefully designed packaging for Hort!",
  },
  roadmap: {
    title: "Goals",
    subtitle: "This is just the start; we’re expanding the ecosystem.",
    items: [
      { title: "Expandable modules", description: "More capacity without more visual space." },
      {
        title: "App intel·ligent amb rutines automàtiques.",
        description: "Learns from your use, adjusts light and watering on the fly.",
      },
      {
        title: "Preparat per interiors en edificis i oficines.",
        description: "Designed for shared spaces with low light.",
      },
      { title: "New kits", description: "Theme varieties to rotate flavors each season." },
    ],
  },
  finalCta: {
    title: "Start eating better without changing your routine.",
    subtitle: "Leave your details and we’ll ping you when the first units launch.",
    primaryCta: "Discover",
    badge: "Hort! · investors",
    form: {
      name: "Name",
      email: "Email",
      submit: "Request info",
      success: "Thanks! We’ll be in touch soon.",
      error: "Please fill name and email to continue.",
      placeholderName: "Full name",
      placeholderEmail: "email@example.com",
    },
  },
  footer: {
    brand: "Hort! · Simple growing with invisible tech.",
    links: [
      { label: "Product", href: "#producto" },
      { label: "Technology", href: "#tecnologia" },
      { label: "Models", href: "#modelos" },
      { label: "Sustainability", href: "#sostenibilidad" },
      { label: "Contact", href: "#contacto" },
    ],
    follow: "Follow us",
  },
};
