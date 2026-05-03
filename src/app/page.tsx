'use client'

import Image from 'next/image'

export default function PortfolioPreview() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="./portfolio/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-teal-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          {/* Profile Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-teal-400/50 shadow-2xl">
              <Image
                src="./portfolio/profile-avatar.png"
                alt="Md. Sanaullah Asif"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
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
          <h2 className="text-4xl font-bold text-white text-center mb-16">What I Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Payment Systems */}
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Payment Systems</h3>
              <p className="text-slate-400">
                Payment gateways, bank integrations, PCI DSS compliance, and secure transaction processing.
              </p>
            </div>

            {/* Automation */}
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
              <p className="text-slate-400">
                Make.com workflows, AI integration, process automation, and intelligent systems.
              </p>
            </div>

            {/* Backend Development */}
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-slate-400">
                Laravel, PHP, API development, system architecture, and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* AI Automation Project */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="./portfolio/ai-automation.png"
                  alt="AI Automation Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">AI Automation Solutions</h3>
                <p className="text-slate-600 mb-4">
                  Intelligent workflow automation leveraging Make.com and AI integration to streamline business processes, 
                  reduce manual tasks, and enhance operational efficiency across organizations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Make.com</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">AI Integration</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Workflow Automation</span>
                </div>
                <a 
                  href="https://docs.google.com/document/d/1sWpQlzz6DYtsQm767fYH201IOIfKyzKT/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-500 transition-colors"
                >
                  View Project Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Education Management Project */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="./portfolio/education-management.png"
                  alt="Education Management System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Education Management System</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive education management platform designed to handle student data, academic records, 
                  and institutional operations with modern technology stack and intuitive user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Laravel</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Education Tech</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">System Design</span>
                </div>
                <a 
                  href="https://docs.google.com/document/d/1j7K8vPlwviNp2LWBGtmYapwwjMCQNWs14qLU5AxsncU/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-500 transition-colors"
                >
                  View Project Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
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
          
          <div className="mb-10">
            <a 
              href="mailto:me.sanaullah.asif@gmail.com"
              className="inline-flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">me.sanaullah.asif@gmail.com</span>
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
        </div>
      </footer>
    </div>
  )
}
