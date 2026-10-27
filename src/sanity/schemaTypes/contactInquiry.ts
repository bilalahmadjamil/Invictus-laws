import { defineType, defineField } from 'sanity';

export const contactInquiry = defineType({
  name: 'contactInquiry',
  title: 'Client Inquiries & Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Full Name',
      type: 'string',
      readOnly: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone / WhatsApp Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subject',
      title: 'Practice Area / Subject',
      type: 'string',
      description: 'e.g. Corporate Law, Commercial Litigation, Cyber Law, Family Law, Other',
    }),
    defineField({
      name: 'message',
      title: 'Client Message / Inquiry Details',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Date & Time Received',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: false,
    }),

    // ADMIN STATUS & WORKFLOW
    defineField({
      name: 'status',
      title: 'Action Status',
      type: 'string',
      description: 'Update the progress of this client inquiry.',
      options: {
        list: [
          { title: '🟢 New / Unread', value: 'new' },
          { title: '👀 Seen / In Review', value: 'seen' },
          { title: '⏳ In Progress / Attorney Assigned', value: 'in_progress' },
          { title: '✅ Replied / Contacted Client', value: 'replied' },
          { title: '📁 Closed / Resolved', value: 'closed' },
          { title: '📦 Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'assignedAttorney',
      title: 'Assigned Attorney (Optional)',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: 'Select an attorney responsible for this matter.',
    }),
    defineField({
      name: 'adminNotes',
      title: 'Admin Action Notes & Feedback',
      type: 'text',
      rows: 4,
      description: 'Record internal legal notes, consultation fee quoted, client callback notes, or resolution feedback.',
      placeholder: 'e.g. Called client on WhatsApp. Discussed corporate registration. Scheduled in-person meeting for Thursday at Lahore office.',
    }),
  ],
  orderings: [
    {
      title: 'Newest Inquiries First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      status: 'status',
      subject: 'subject',
      submittedAt: 'submittedAt',
      phone: 'phone',
    },
    prepare({ title, status, subject, submittedAt, phone }) {
      const statusLabels: Record<string, string> = {
        new: '🟢 NEW',
        seen: '👀 SEEN',
        in_progress: '⏳ IN PROGRESS',
        replied: '✅ REPLIED',
        closed: '📁 CLOSED',
        archived: '📦 ARCHIVED',
      };
      const badge = statusLabels[status] || '🟢 NEW';
      const dateStr = submittedAt 
        ? new Date(submittedAt).toLocaleDateString('en-PK', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
        : '';
      return {
        title: `${title || 'Anonymous'} — ${badge}`,
        subtitle: `${subject || 'General Inquiry'} • ${phone || ''} • ${dateStr}`,
      };
    },
  },
});
