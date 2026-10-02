import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    if (!resend) {
      console.warn('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json({
        success: true,
        message: 'Message received (RESEND_API_KEY not configured yet).',
      });
    }

    const recipient = process.env.ADMIN_EMAIL;
    if (!recipient) {
      console.error('ADMIN_EMAIL is not set in environment variables.');
      return NextResponse.json({ error: 'Recipient email is not configured' }, { status: 500 });
    }

    // Send email via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border-radius: 16px; border: 1px solid #222;">
          <div style="border-bottom: 1px solid #222; padding-bottom: 20px; margin-bottom: 24px;">
            <h2 style="color: #ff6b1a; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Message from Portfolio</h2>
            <p style="color: #666; margin: 6px 0 0; font-size: 13px;">Received via ankitgupta.dev contact form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 14px; width: 80px; font-weight: 500;">From:</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 14px; font-weight: 500;">Email:</td>
              <td style="padding: 10px 0; color: #ff6b1a; font-size: 14px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #ff6b1a; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: #141414; border-radius: 12px; padding: 20px; border: 1px solid #262626;">
            <p style="color: #aaa; margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Message Content</p>
            <p style="color: #e5e5e5; line-height: 1.7; font-size: 14px; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center; border-top: 1px solid #222; padding-top: 20px;">
            <a href="mailto:${email}" style="display: inline-block; background: #ff6b1a; color: #000; font-weight: 700; font-size: 13px; padding: 12px 28px; border-radius: 9999px; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">Reply Directly to ${name}</a>
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend delivery error:', emailError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
