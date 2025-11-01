import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Check if environment variables are set
    console.log('🔍 Checking Gmail credentials...')
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER)
    console.log('GMAIL_USER value:', process.env.GMAIL_USER ? `${process.env.GMAIL_USER.substring(0, 3)}...` : 'MISSING')
    console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD)
    console.log('GMAIL_APP_PASSWORD length:', process.env.GMAIL_APP_PASSWORD?.length || 0)
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Missing Gmail credentials!')
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us at (365) 888-5854.' },
        { status: 503 }
      )
    }

    console.log('✅ Gmail credentials found, creating transporter...')

    // Create transporter using Gmail SMTP with timeout settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
      logger: true, // Enable logging
      debug: true, // Enable debug output
    })

    // Verify transporter configuration
    console.log('🔌 Verifying SMTP connection...')
    try {
      await transporter.verify()
      console.log('✅ SMTP connection verified successfully!')
    } catch (verifyError: any) {
      console.error('❌ SMTP verification failed:', {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        responseCode: verifyError.responseCode,
        response: verifyError.response,
      })
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service configuration error. Please contact us at (365) 888-5854.',
          details: verifyError.message
        },
        { status: 503 }
      )
    }

    // Email to business owner
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
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
    }

    // Send email with timeout
    console.log('📧 Attempting to send email...')
    try {
      const result = await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email send timeout after 15 seconds')), 15000)
        )
      ])

      console.log('✅ Email sent successfully!', result)
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error('❌ Email send error:', {
        message: emailError.message,
        code: emailError.code,
        command: emailError.command,
        responseCode: emailError.responseCode,
        response: emailError.response,
        stack: emailError.stack,
      })
      
      // Return user-friendly error
      return NextResponse.json(
        { 
          success: false, 
          message: 'We received your message but had trouble sending the confirmation. Please call us at (365) 888-5854 to confirm we received it.',
          error: emailError?.code || 'UNKNOWN',
          details: emailError?.message
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

