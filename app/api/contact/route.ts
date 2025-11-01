import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Check if Resend API key is set
    console.log('🔍 Checking Resend API key...')
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
    
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ Missing Resend API key!')
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us at (365) 888-5854.' },
        { status: 503 }
      )
    }

    // Check if recipient email is set
    if (!process.env.CONTACT_EMAIL) {
      console.error('❌ Missing contact email!')
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us at (365) 888-5854.' },
        { status: 503 }
      )
    }

    console.log('✅ Resend API key found, creating client...')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    console.log('📧 Attempting to send email via Resend...')
    try {
      const { data, error } = await resend.emails.send({
        from: 'Iron Air HC <onboarding@resend.dev>', // Default Resend sender (you'll change this after domain setup)
        to: [process.env.CONTACT_EMAIL!],
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a8a; border-bottom: 3px solid #ef4444; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="line-height: 1.6; color: #4b5563;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the Iron Air HC contact form.</p>
            </div>
          </div>
        `,
        replyTo: email, // Allow replying directly to the customer
      })

      if (error) {
        console.error('❌ Resend API error:', error)
        return NextResponse.json(
          { 
            success: false, 
            message: 'Failed to send email. Please call us at (365) 888-5854.',
            error: error.message
          },
          { status: 500 }
        )
      }

      console.log('✅ Email sent successfully via Resend!', data)
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error('❌ Email send error:', emailError)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please call us at (365) 888-5854.',
          error: emailError?.message || 'UNKNOWN'
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Request processing error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    )
  }
}

