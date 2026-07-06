import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, service } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const plunkApiKey = process.env.PLUNK_API_KEY;
    if (!plunkApiKey) {
      console.error('PLUNK_API_KEY environment variable is not defined.');
      return NextResponse.json(
        { error: 'Email service is not configured on the server. Please check the PLUNK_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // Map service key to reader-friendly label
    const serviceLabels = {
      'customer-enquiry': 'Customer Enquiry Assistant',
      'lead-follow-up': 'Lead & Quote Follow-Up',
      'admin-documents': 'Admin & Document Assistant',
      'ai-training': 'AI Consultancy & Crash Course',
      'starter-package': 'Managed AI Starter Package',
      'consultation': 'Not sure - need a consultation'
    };
    const serviceLabel = serviceLabels[service] || service || 'General Inquiry';

    // Build the premium HTML template matching the AI Boffins brand
    const htmlMessage = `
<div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.025); border: 1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="background-color: #1E4B7C; padding: 32px; text-align: center; border-bottom: 4px solid #FFAA00;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
        AI <span style="color: #FFAA00;">Boffins</span>
      </h1>
      <p style="margin: 4px 0 0 0; color: #e2e8f0; font-size: 14px;">New Lead Submission</p>
    </div>

    <!-- Content Body -->
    <div style="padding: 32px;">
      <h2 style="margin-top: 0; margin-bottom: 24px; color: #0f172a; font-size: 18px; font-weight: 700; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        Contact Details
      </h2>

      <!-- Details Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; width: 35%; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Name</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9; font-weight: 500;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1E4B7C; border-bottom: 1px solid #f1f5f9; font-weight: 500;">
            <a href="mailto:${email}" style="color: #1E4B7C; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Company</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${company || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Phone</td>
          <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
            ${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<span style="color: #cbd5e1; font-style: italic;">Not provided</span>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 14px; color: #64748b; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Service Interest</td>
          <td style="padding: 10px 0; font-size: 14px; color: #2DBE7F; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
            ${serviceLabel}
          </td>
        </tr>
      </table>

      <!-- Message Section -->
      <h2 style="margin-top: 0; margin-bottom: 16px; color: #0f172a; font-size: 18px; font-weight: 700; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        Team Challenges & Inquiry
      </h2>
      <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; line-height: 1.6; font-size: 14px; color: #334155; white-space: pre-wrap;">${message}</div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f5f9; padding: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0 0 8px 0; font-weight: 600;">AI Boffins Lead Generation</p>
      <p style="margin: 0;">This email was automatically generated and sent from <a href="https://aiboffins.co.uk" style="color: #1E4B7C; text-decoration: none; font-weight: 500;">aiboffins.co.uk</a>.</p>
    </div>
  </div>
</div>
`;

    // Call Plunk REST API
    const response = await fetch('https://next-api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plunkApiKey}`,
      },
      body: JSON.stringify({
        to: 'info@aiboffins.co.uk',
        from: 'info@aiboffins.co.uk',
        subject: `New Contact Form Submission from ${name}`,
        body: htmlMessage,
        name: 'AI Boffins Contact Form',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Plunk API error response:', errorText);
      return NextResponse.json(
        { error: `Plunk API error: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error in inquiries route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
