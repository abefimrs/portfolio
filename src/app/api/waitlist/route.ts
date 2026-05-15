import { NextResponse } from 'next/server'
import { webhook } from '@/content/payguard'

interface WaitlistData {
  name: string
  email: string
  company?: string
  gateway?: string
  timestamp: string
}

export async function POST(request: Request) {
  try {
    const data: WaitlistData = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // If webhook is configured, send data to Make.com
    if (webhook.enabled && webhook.url) {
      try {
        await fetch(webhook.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company || '',
            gateway: data.gateway || '',
            timestamp: data.timestamp,
            source: 'PayGuard Landing Page',
          }),
        })
      } catch (webhookError) {
        // Log webhook error but don't fail the request
        console.error('Webhook failed:', webhookError)
        // Continue - we'll store locally as backup
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
    })
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check waitlist count or status
export async function GET() {
  return NextResponse.json({
    status: 'active',
    message: 'Waitlist is open',
  })
}
