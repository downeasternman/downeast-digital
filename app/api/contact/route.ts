import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create email content
    const msg = {
      to: 'downeastclancy@gmail.com', // Your business email
      from: process.env.SENDGRID_VERIFIED_SENDER || 'noreply@downeastdigital.com', // Your verified sender
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    // Send confirmation email to the user
    const confirmationMsg = {
      to: email,
      from: process.env.SENDGRID_VERIFIED_SENDER || 'noreply@downeastdigital.com',
      subject: 'Thank you for contacting DownEast Digital',
      text: `
        Thank you for reaching out to DownEast Digital Solutions. We have received your message and will get back to you as soon as possible.
        
        Here's a copy of your message:
        ${message}
        
        Best regards,
        The DownEast Digital Team
      `,
      html: `
        <h2>Thank you for contacting DownEast Digital</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <h3>Your Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>The DownEast Digital Team</p>
      `,
    };

    await sgMail.send(confirmationMsg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 