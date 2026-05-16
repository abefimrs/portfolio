// =====================================================
// PORTFOLIO CONTENT CONFIGURATION
// =====================================================
// Edit this file to update your portfolio content.
// No need to touch the code in page.tsx!
// =====================================================

// Profile Information
export const profile = {
  name: "Md. Sanaullah Asif",
  headline: "Senior FinTech Engineer & Automation Specialist",
  email: "me.sanaullah.asif@gmail.com",
  github: "https://github.com/abefimrs",
  githubUsername: "abefimrs",
  avatar: "/portfolio/profile-avatar.png", // Replace with your real photo!
  tags: [
    "9+ years building payment infrastructure",
    "Make.com Certified",
    "Laravel Expert",
    "Available for Remote Work",
  ],
}

// About Section
export const about = `I'm the engineer behind shurjoPay's core payment engine — Bangladesh's fastest-growing fintech platform. With 9+ years building payment gateways, bank integrations, and PCI DSS compliant systems, I bring deep technical expertise to every project. Now combining that backend depth with Make.com automation and AI integration to build smarter solutions.`

// Skills - Array of skill objects
export const skills = [
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Make.com", category: "Automation" },
  { name: "AI/LLM", category: "Automation" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
]

// Skills Categories for display
export const skillCategories = [
  {
    title: "Backend",
    icon: "server",
    skills: ["Laravel", "PHP", "Node.js"],
  },
  {
    title: "Frontend",
    icon: "monitor",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Automation",
    icon: "zap",
    skills: ["Make.com", "AI/LLM", "APIs"],
  },
  {
    title: "Cloud & DB",
    icon: "cloud",
    skills: ["AWS", "MySQL", "Redis"],
  },
]

// Certifications
export const certifications = [
  {
    title: "Make.com Certified",
    description: "Certified Automation Expert",
    icon: "badge",
    color: "purple", // purple, teal, blue, orange
    verified: true,
    link: null, // Add link to certification if available
  },
  {
    title: "Anthropic AI",
    description: "AI Integration Specialist",
    icon: "lightbulb",
    color: "teal",
    verified: true,
    link: null,
  },
]

// Projects - Array of project objects
export const projects = [
  {
    title: "Lead Capture Automation",
    description: "Automated lead capture system integrating web forms with CRM platforms. Built with Make.com to streamline lead processing, qualification, and distribution — reducing manual work by 80%.",
    image: "/portfolio/lead-capture.png",
    tags: ["Make.com", "Automation", "CRM"],
    link: null, // Add project link (GitHub, live demo, etc.)
    featured: true,
  },
  {
    title: "AI Question Answering System",
    description: "Intelligent Q&A system powered by AI/LLM technology. Enables natural language queries against documentation and knowledge bases with contextual, accurate responses.",
    image: "/portfolio/ai-qa-system.png",
    tags: ["AI/LLM", "RAG", "Node.js"],
    link: null,
    featured: true,
  },
  {
    title: "Transaction API",
    description: "RESTful API for payment transaction processing. Handles validation, routing, and status tracking with comprehensive documentation and webhook support.",
    image: "/portfolio/transaction-api.png",
    tags: ["Laravel", "REST API", "Payments"],
    link: "https://github.com/abefimrs",
    featured: true,
  },
  {
    title: "ShurjoPay Payment Engine",
    description: "Core payment gateway engine powering Bangladesh's fastest-growing fintech platform. Built bank integrations, transaction routing, and PCI DSS compliant systems serving millions of transactions.",
    image: "/portfolio/shurjopay.png",
    tags: ["Laravel", "FinTech", "PCI DSS"],
    link: null, // Private/confidential
    featured: true,
  },
]

// Social Links
export const socialLinks = [
  {
    name: "Email",
    url: "mailto:me.sanaullah.asif@gmail.com",
    icon: "email",
  },
  {
    name: "GitHub",
    url: "https://github.com/abefimrs",
    icon: "github",
  },
  // Add more social links as needed
  // {
  //   name: "LinkedIn",
  //   url: "https://linkedin.com/in/yourprofile",
  //   icon: "linkedin",
  // },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yourhandle",
  //   icon: "twitter",
  // },
]

// SEO Metadata
export const seo = {
  title: "Md. Sanaullah Asif | Senior FinTech Engineer",
  description: "Senior FinTech Engineer & Automation Specialist with 9+ years building payment infrastructure. Make.com Certified, Laravel Expert. Available for remote work.",
  keywords: ["FinTech", "Payment Gateway", "Laravel", "Make.com", "Automation", "Bangladesh", "shurjoPay", "PCI DSS", "Backend Developer", "Node.js", "React"],
  url: "https://abefimrs.github.io/portfolio/",
}

// Footer
export const footer = {
  copyright: `© ${new Date().getFullYear()} Md. Sanaullah Asif. All rights reserved.`,
  tagline: "Built with passion for fintech innovation.",
}
