'use client'

import Image from 'next/image'

export default function Portfolio() {
  const skills = [
    { name: 'Laravel', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Make.com', category: 'Automation' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
  ]

  const projects = [
    {
      title: 'Lead Capture Automation',
      description: 'Automated lead capture system integrating web forms with CRM platforms. Built with Make.com to streamline lead processing, qualification, and distribution — reducing manual work by 80%.',
      image: '/portfolio/lead-capture.png',
      tags: ['Make.com', 'Automation', 'CRM'],
      link: null,
    },
    {
      title: 'AI Question Answering System',
      description: 'Intelligent Q&A system powered by AI/LLM technology. Enables natural language queries against documentation and knowledge bases with contextual, accurate responses.',
      image: '/portfolio/ai-qa-system.png',
      tags: ['AI/LLM', 'RAG', 'Node.js'],
      link: null,
    },
    {
      title: 'Transaction API',
      description: 'RESTful API for payment transaction processing. Handles validation, routing, and status tracking with comprehensive documentation and webhook support.',
      image: '/portfolio/transaction-api.png',
      tags: ['Laravel', 'REST API', 'Payments'],
      link: 'https://github.com/abefimrs',
    },
    {
      title: 'ShurjoPay Payment Engine',
      description: 'Core payment gateway engine powering Bangladesh\'s fastest-growing fintech platform. Built bank integrations, transaction routing, and PCI DSS compliant systems serving millions of transactions.',
      image: '/portfolio/shurjopay.png',
      tags: ['Laravel', 'FinTech', 'PCI DSS'],
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/portfolio/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-teal-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
          {/* Profile Avatar - Replace with your real photo */}
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-teal-400/50 shadow-2xl bg-slate-700">
              <Image
                src="/portfolio/profile-avatar.png"
                alt="Md. Sanaullah Asif"
                width={144}
                height={144}
                className="object-cover"
              />
            </div>
            <p className="text-teal-300 text-sm mt-3 italic">Add your real photo for better client engagement</p>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Md. Sanaullah Asif
          </h1>
          
          {/* Headline */}
          <p className="text-xl md:text-2xl text-teal-400 font-semibold mb-6">
            Senior FinTech Engineer & Automation Specialist
          </p>
          
          {/* Subheadline */}
          <div className="flex flex-wrap justify-center gap-3 text-slate-300 text-sm md:text-base mb-10">
            <span className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">9+ years building payment infrastructure</span>
            <span className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">Make.com Certified</span>
            <span className="px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">Laravel Expert</span>
            <span className="px-4 py-1.5 bg-teal-500/30 rounded-full backdrop-blur-sm border border-teal-400/50">Available for Remote Work</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a 
              href="mailto:me.sanaullah.asif@gmail.com" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a 
              href="https://github.com/abefimrs" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-500 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            I&apos;m the engineer behind <span className="font-semibold text-teal-600">shurjoPay&apos;s core payment engine</span> — 
            Bangladesh&apos;s fastest-growing fintech platform. With 9+ years building payment gateways, 
            bank integrations, and PCI DSS compliant systems, I bring deep technical expertise to every project. 
            Now combining that backend depth with <span className="font-semibold text-purple-600">Make.com automation</span> and 
            <span className="font-semibold text-teal-600"> AI integration</span> to build smarter solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Technical Skills</h2>
          <p className="text-slate-400 text-center mb-12">Technologies I work with daily</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <span className="text-white font-medium group-hover:text-teal-400 transition-colors">{skill.name}</span>
                <span className="text-slate-500 text-sm ml-2">• {skill.category}</span>
              </div>
            ))}
          </div>

          {/* Skills by Category */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Backend</h3>
              <p className="text-slate-400 text-sm">Laravel, PHP, Node.js</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">React, Next.js, Tailwind</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automation</h3>
              <p className="text-slate-400 text-sm">Make.com, AI/LLM, APIs</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud & DB</h3>
              <p className="text-slate-400 text-sm">AWS, MySQL, Redis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-slate-300 mb-12">Verified credentials that demonstrate expertise</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Make.com Certification */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Make.com Certified</h3>
              <p className="text-slate-400 text-sm mb-4">Certified Automation Expert</p>
              <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                ✓ Verified Professional
              </span>
            </div>

            {/* Anthropic/AI Certification */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anthropic AI</h3>
              <p className="text-slate-400 text-sm mb-4">AI Integration Specialist</p>
              <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium">
                ✓ AI Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-4">Featured Projects</h2>
          <p className="text-slate-600 text-center mb-16">Real solutions I&apos;ve built for clients and businesses</p>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-500 transition-colors"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-slate-500 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Private/Confidential
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-slate-300 mb-10">
            Available for remote opportunities, consulting, and collaboration.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <a 
              href="mailto:me.sanaullah.asif@gmail.com"
              className="inline-flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">me.sanaullah.asif@gmail.com</span>
            </a>
            
            <span className="text-slate-600 hidden md:inline">|</span>
            
            <a 
              href="https://github.com/abefimrs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-teal-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">github.com/abefimrs</span>
            </a>
          </div>
          
          <a 
            href="mailto:me.sanaullah.asif@gmail.com"
            className="inline-block px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Md. Sanaullah Asif. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Built with passion for fintech innovation.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:me.sanaullah.asif@gmail.com" className="text-slate-500 hover:text-teal-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://github.com/abefimrs" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
