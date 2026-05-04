// ===== PROFILE =====
export const profile = {
  name: "Md. Sanaullah Asif",
  headline: "Senior FinTech Engineer & Automation Specialist",
  email: "me.sanaullah.asif@gmail.com",
  github: "https://github.com/abefimrs",
  avatar: "/portfolio/profile-avatar.png",  // ← Replace with your photo
  tags: [
    "9+ years building payment infrastructure",
    "Make.com Certified",
    "Laravel Expert",
    "Available for Remote Work",
  ],
}

// ===== ADD NEW PROJECT =====
export const projects = [
  {
    title: "Lead Capture Automation",
    description: "Automated lead capture system integrating web forms with CRM platforms. Built with Make.com to streamline lead processing, qualification, and distribution — reducing manual work by 80%.",
    image: "/portfolio/lead-capture.png",
    tags: ["Make.com", "Automation", "CRM"],
    link: null,  // or null for private
    featured: true,
  },
   {
    title: "AI Question Answering System",
    description: "Intelligent Q&A system powered by AI/LLM technology. Enables natural language queries against documentation and knowledge bases with contextual, accurate responses.",
    image: "/portfolio/ai-qa-system.png",
    tags: ["AI/LLM", "RAG", "Node.js"],
    link: null,  // or null for private
    featured: true,
  },
  {
    title: "Transaction Dashboard/API",
    description: "RESTful API for payment transaction processing. Handles validation, routing, and status tracking with comprehensive documentation and webhook support.",
    image: "/portfolio/transaction-api.png",
    tags: ["Laravel", "REST API", "Payments"],
    link: "https://github.com/abefimrs/transaction-dashboard",  // or null for private
    featured: true,
  },
  {
    title: "ShurjoPay Payment Engine",
    description: "Core payment gateway engine powering Bangladesh's fastest-growing fintech platform. Built bank integrations, transaction routing, and PCI DSS compliant systems serving millions of transactions.",
    image: "/portfolio/shurjopay.pngg",
    tags: ["Laravel", "FinTech", "PCI DSS"],
    link: null,  // or null for private
    featured: true,
  },
  // ... more projects
]

// ===== ADD NEW SKILL =====
export const skills = [
  { name: "Laravel, PHP, Node.js", category: "Backend" },
  { name: "React, Next.js, Tailwind", category: "Frontend" },
  { name: "Make.com, AI/LLM, APIs", category: "Automation" },
  { name: "AWS, MySQL, Redis", category: "Cloud & DB" },
  // ... more skills
]

// ===== ADD NEW CERTIFICATION =====
export const certifications = [
  {
    title: "AWS Certified",
    description: "Cloud Practitioner",
    icon: "badge",
    color: "orange",  // purple, teal, blue, orange
    verified: true,
    link: "https://www.credly.com/badges/e2cad686-bf52-4606-a59f-8fb4d1b88cfa",
  },
   {
    title: "Make.com Certified",
    description: "Certified Automation Expert",
    icon: "badge",
    color: "purple",  // purple, teal, blue, orange
    verified: true,
    link: "https://www.credly.com/badges/f6419123-3378-4bd2-80a4-76af303712f1/public_url",
  },
   {
    title: "Anthropic AI",
    description: "AI Integration Specialist",
    icon: "badge",
    color: "blue",  // purple, teal, blue, orange
    verified: true,
    link: "https://verify.skilljar.com/c/sd6drmvpxhgv",
  },
  // ... more certifications
]