// =====================================================
// PAYGUARD SAAS LANDING PAGE CONTENT
// =====================================================
// Edit this file to update your SaaS landing page content.
// =====================================================

// Brand Information
export const brand = {
  name: "PayGuard",
  tagline: "Never Lose a Transaction Again",
  logo: "/portfolio/payguard-logo.png", // Add your logo
  contactEmail: "me.sanaullah.asif@gmail.com",
}

// Hero Section
export const hero = {
  badge: "Built by a shurjoPay Engineer",
  title: "Never Lose a",
  titleHighlight: "Transaction",
  titleEnd: "Again",
  description:
    "Automatic detection and resolution of failed payment transactions. No manual reconciliation. No lost revenue. No angry customers.",
  cta: "Join Early Access — Free",
  ctaSecondary: "Get Early Access",
}

// Pain Points (Problem Section)
export const painPoints = {
  title: "Sound familiar?",
  description:
    "Every merchant faces these problems daily. Most accept them as normal. They're not.",
  items: [
    {
      icon: "money",
      title: "Ghost Transactions",
      description:
        "Customer charged but your system never updated. Money gone, order not fulfilled.",
    },
    {
      icon: "clock",
      title: "T+1 Settlement Delays",
      description:
        "Wait 24+ hours for your own money. Cash flow suffers every single day.",
    },
    {
      icon: "clipboard",
      title: "Manual Reconciliation",
      description:
        "Hours every week matching payment records manually. This should not be your job.",
    },
  ],
}

// Features (Solution Section)
export const features = {
  title: "PayGuard fixes this",
  titleHighlight: "automatically",
  description:
    "Built by engineers who spent 9+ years inside payment gateways. We know exactly where transactions break.",
  items: [
    {
      icon: "search",
      title: "Instant Detection",
      description:
        "Failed or stuck transactions detected in real time — not hours later when your customer complains.",
    },
    {
      icon: "zap",
      title: "Auto Resolution",
      description:
        "System automatically reconciles the transaction and updates your order status. Zero manual work.",
    },
    {
      icon: "bell",
      title: "Instant Alerts",
      description:
        "You and your customer notified immediately with accurate status. No confusion. No complaints.",
    },
    {
      icon: "chart",
      title: "Full Audit Trail",
      description:
        "Every transaction logged with complete history. Compliance ready. Dispute proof.",
    },
    {
      icon: "crypto",
      title: "Crypto Support",
      description:
        "Accept USDT, ETH, BTC alongside traditional payments. Instant settlement. No T+1 delays.",
    },
    {
      icon: "link",
      title: "Easy Integration",
      description:
        "Connect to your existing payment gateway in minutes. No code changes required.",
    },
  ],
}

// How It Works Steps
export const steps = {
  title: "How It Works",
  items: [
    {
      number: 1,
      title: "Connect",
      description: "Connect your payment gateway via webhook in minutes",
    },
    {
      number: 2,
      title: "Monitor",
      description: "PayGuard watches every transaction in real time",
    },
    {
      number: 3,
      title: "Detect",
      description: "Failed or stuck transactions identified instantly",
    },
    {
      number: 4,
      title: "Resolve",
      description: "Auto-reconciliation updates your system correctly",
    },
    {
      number: 5,
      title: "Notify",
      description: "You and customer notified with accurate status",
    },
  ],
}

// Waitlist Form
export const waitlist = {
  title: "Get Early Access",
  description:
    "Join merchants who are done losing money to failed transactions. First 50 users get 3 months free.",
  cta: "Join Early Access — Free",
  successMessage: "You're on the list! We'll be in touch soon with early access details.",
  counter: "47 merchants already on the waitlist",
  paymentGateways: [
    "shurjoPay",
    "bKash",
    "Nagad",
    "Stripe",
    "PayPal",
    "Razorpay",
    "Flutterwave",
    "Other",
  ],
}

// Footer
export const footer = {
  tagline:
    "PayGuard — Built by engineers who lived inside payment gateways for 9 years.",
  copyright: `© ${new Date().getFullYear()} PayGuard. All rights reserved.`,
}

// Make.com Webhook Configuration
export const webhook = {
  // Replace with your actual Make.com webhook URL
  url: process.env.MAKE_WEBHOOK_URL || "",
  enabled: true, // Set to false to disable webhook calls
}
