import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (resend) {
      // In a real app, you would generate a token and save it to the database
      // For now, we simulate sending a reset link
      await resend.emails.send({
        from: 'Veltrix Security <onboarding@resend.dev>',
        to: email,
        subject: 'Reset your Veltrix Consultant password',
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1d1d1f; max-width: 600px;">
            <h2 style="color: #0071e3;">Password Reset</h2>
            <p>Hello,</p>
            <p>We received a request to reset the password for your Veltrix Consultant account.</p>
            <p>Click the button below to choose a new password. This link will expire in 1 hour.</p>
            <div style="margin: 30px 0;">
              <a href="#" style="background: #1d1d1f; color: white; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-weight: 600; font-size: 15px;">Reset Password</a>
            </div>
            <p style="font-size: 14px; color: #86868b;">If you didn't request this, you can safely ignore this email.</p>
            <br />
            <p>Best regards,<br /><strong>Veltrix Consultant Security Team</strong></p>
          </div>
        `,
      });
    }

    console.log('[Password Reset Requested]', { email });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Forgot Password Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
