'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  brand,
  hero,
  painPoints,
  features,
  steps,
  waitlist,
  footer,
} from '@/content/payguard'

// Icon Components
const Icons = {
  money: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  search: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  zap: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  bell: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  crypto: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  link: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

// Form State Type
interface FormData {
  name: string
  email: string
  company: string
  gateway: string
}

export default function PayGuardLanding() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    gateway: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gateway: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email) {
      setError('Please fill in your name and email.')
      return
    }

    setIsSubmitting(true)

    try {
      // Make.com webhook URL - edit this to change the webhook
      const webhookUrl = 'https://hook.us2.make.com/e86plxgcn2oabwv4xjjyusudj3sqjw71'

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        gateway: formData.gateway || '',
        timestamp: new Date().toISOString(),
        source: 'PayGuard Landing Page',
      }

      // Submit to Make.com webhook
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors', // Required for cross-origin webhook calls
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (webhookError) {
        console.warn('Webhook submission failed:', webhookError)
      }

      // Save to localStorage as backup
      const entries = JSON.parse(localStorage.getItem('payguard_waitlist') || '[]')
      entries.push(payload)
      localStorage.setItem('payguard_waitlist', JSON.stringify(entries))

      setIsSuccess(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Navigation */}
      <nav className="px-6 py-5 md:px-10 flex justify-between items-center border-b border-[#1e2130]">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#00d4aa]">
          {Icons.shield}
          <span>{brand.name}</span>
        </div>
        <Button
          asChild
          className="bg-[#00d4aa] text-[#0f1117] hover:bg-[#00b894] font-semibold"
        >
          <a href="#waitlist">{hero.ctaSecondary}</a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 md:py-28 px-6 max-w-4xl mx-auto">
        <div className="inline-block bg-[#00d4aa]/10 border border-[#00d4aa] text-[#00d4aa] px-4 py-1.5 rounded-full text-sm mb-6">
          🔒 {hero.badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {hero.title}{' '}
          <span className="text-[#00d4aa]">{hero.titleHighlight}</span>{' '}
          {hero.titleEnd}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {hero.description}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#00d4aa] text-[#0f1117] hover:bg-[#00b894] font-semibold text-lg px-10 py-6"
        >
          <a href="#waitlist">{hero.cta}</a>
        </Button>
      </section>

      {/* Problem Section */}
      <section className="bg-[#13161f] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {painPoints.title}
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            {painPoints.description}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {painPoints.items.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a1e2e] border border-red-500/50 rounded-xl p-6 w-full sm:w-[280px] text-left hover:border-red-500 transition-colors"
              >
                <div className="text-red-400 mb-3">
                  {Icons[item.icon as keyof typeof Icons]}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-red-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {features.title}{' '}
            <span className="text-[#00d4aa]">{features.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            {features.description}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {features.items.map((item) => (
              <div
                key={item.title}
                className="bg-[#13161f] border border-[#1e2130] rounded-xl p-6 w-full sm:w-[280px] text-left hover:border-[#00d4aa]/50 transition-colors"
              >
                <div className="text-[#00d4aa] mb-4">
                  {Icons[item.icon as keyof typeof Icons]}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#00d4aa]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#13161f] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {steps.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            {steps.items.map((step, index) => (
              <div
                key={step.number}
                className="text-center px-4 py-6 w-full sm:w-[180px]"
              >
                <div className="w-12 h-12 bg-[#00d4aa] text-[#0f1117] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
                {index < steps.items.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-[#00d4aa]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {waitlist.title}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{waitlist.description}</p>

          {isSuccess ? (
            <div className="bg-[#00d4aa]/10 border border-[#00d4aa] text-[#00d4aa] p-6 rounded-lg">
              <p className="text-lg">🎉 {waitlist.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-[#13161f] border-[#1e2130] text-white placeholder:text-gray-500 focus:border-[#00d4aa] h-14"
              />
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-[#13161f] border-[#1e2130] text-white placeholder:text-gray-500 focus:border-[#00d4aa] h-14"
              />
              <Input
                id="company"
                type="text"
                placeholder="Company or business name (optional)"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-[#13161f] border-[#1e2130] text-white placeholder:text-gray-500 focus:border-[#00d4aa] h-14"
              />
              <Select value={formData.gateway} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-[#13161f] border-[#1e2130] text-white h-14 focus:border-[#00d4aa]">
                  <SelectValue placeholder="Which payment gateway do you use?" />
                </SelectTrigger>
                <SelectContent className="bg-[#13161f] border-[#1e2130] text-white">
                  {waitlist.paymentGateways.map((gateway) => (
                    <SelectItem
                      key={gateway}
                      value={gateway}
                      className="hover:bg-[#1a1e2e] focus:bg-[#1a1e2e]"
                    >
                      {gateway}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {error && (
                <p className="text-red-400 text-sm text-left">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00d4aa] text-[#0f1117] hover:bg-[#00b894] font-semibold h-14 text-lg"
              >
                {isSubmitting ? 'Submitting...' : `${waitlist.cta} →`}
              </Button>
            </form>
          )}

          <p className="mt-4 text-gray-500 text-sm">🔥 {waitlist.counter}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-6 border-t border-[#1e2130]">
        <p className="text-gray-400">{footer.tagline}</p>
        <p className="text-gray-500 text-sm mt-2">
          Contact: {brand.contactEmail}
        </p>
        <p className="text-gray-600 text-xs mt-4">{footer.copyright}</p>
      </footer>
    </div>
  )
}
