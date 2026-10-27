import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

// Server-side write client with token
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wlu8c7im',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-01',
  token: process.env.SANITY_API_WRITE_TOKEN || 'skJxvT57INDcilwZ1VFG7ogWsosi9ZUM4uyRMVA1XzPJ77VMFz2yWHdaAksVqPxoStxKzqriQJtyvvGxQgY5XJnrEXwSLxI1GzSHYOz2e6ZnG9OhrXfmrr76auMLJd7vw6GAhv6KPfTLpZl8SgtU3iFZTBBhelmh6EzoNTAQkyzulPMUb3FJ',
  useCdn: false,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Phone, and Message).' },
        { status: 400 }
      );
    }

    const fullName = `${firstName.trim()} ${(lastName || '').trim()}`.trim();

    // 1. Create document directly in Sanity Studio Inquiries collection
    const inquiryDoc = await writeClient.create({
      _type: 'contactInquiry',
      name: fullName,
      email: email.trim(),
      phone: phone.trim(),
      subject: subject || 'General Inquiry',
      message: message.trim(),
      status: 'new',
      submittedAt: new Date().toISOString(),
    });

    // 2. Also forward to Formspree asynchronously for email delivery notification
    try {
      const formData = new URLSearchParams();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName || '');
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('subject', subject || 'General');
      formData.append('message', message);

      fetch('https://formspree.io/f/mwvrblyv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).catch((e) => console.warn('Formspree forward error:', e));
    } catch {
      // Non-blocking
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and logged successfully.',
      id: inquiryDoc._id,
    });
  } catch (error: any) {
    console.error('API Contact submission error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
