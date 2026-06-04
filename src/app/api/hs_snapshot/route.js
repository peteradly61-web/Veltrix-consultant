import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initializing Resend outside the handler
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { hsCode, role, email, targetRegion } = body;

    // 1. Validate inputs
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    if (!hsCode || hsCode.length < 4) {
      return NextResponse.json({ error: 'Valid HS Code is required.' }, { status: 400 });
    }

    // 2. Prepare the notification for the ADMIN (User)
    if (resend) {
      try {
        // Send email to Veltrix Consultant (Admin Notification)
        await resend.emails.send({
          from: 'Veltrix Leads <onboarding@resend.dev>', // Resend default for unverified domains
          to: 'veltrixconsultant@gmail.com',
          subject: `New HS Snapshot Request: ${hsCode}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #1d1d1f; max-width: 600px;">
              <h2 style="border-bottom: 1px solid #f5f5f7; padding-bottom: 10px;">New Lead Received</h2>
              <p>A new request for an HS Snapshot has been submitted through the website.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px; background: #f5f5f7; font-weight: bold; width: 150px;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #f5f5f7;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f7; font-weight: bold;">Role:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #f5f5f7;">${role}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f7; font-weight: bold;">HS Code:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #f5f5f7;">${hsCode}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f7; font-weight: bold;">Target Region:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #f5f5f7;">${targetRegion || 'Not specified'}</td>
                </tr>
              </table>
              
              <p style="margin-top: 30px; font-size: 12px; color: #86868b;">
                This lead was captured at ${new Date().toLocaleString()}.
              </p>
            </div>
          `,
        });

        // Optional: Send a confirmation to the CLIENT
        await resend.emails.send({
          from: 'Veltrix Consultant <onboarding@resend.dev>',
          to: email,
          subject: 'We received your HS Snapshot request',
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #1d1d1f; max-width: 600px;">
              <h2 style="color: #0071e3;">Request Received</h2>
              <p>Hello,</p>
              <p>We've received your request for an econometric analysis for HS Code <strong>${hsCode}</strong>.</p>
              <p>Our team is currently processing the data for the <strong>${targetRegion || 'requested'}</strong> region. You can expect your 5-page preliminary assessment in your inbox within 24 hours.</p>
              <br />
              <p>Best regards,<br /><strong>Veltrix Consultant Team</strong></p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('[Resend Error]', emailError);
        // We don't want to fail the whole request if email fails but we should log it
      }
    } else {
      console.warn('RESEND_API_KEY is not set. Email was not sent.');
    }

    // 3. Log for debugging
    console.log('[Lead Captured]', { hsCode, role, email, targetRegion });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
