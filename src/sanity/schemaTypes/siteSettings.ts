import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings & Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'firmName',
      title: 'Firm Name',
      type: 'string',
      initialValue: 'Invictus Corporate & Legal Consultants (ICLC)',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Consultation Number',
      type: 'string',
      description: 'Format with country code (e.g. 923134891684). Used by floating WhatsApp chat button.',
      initialValue: '923134891684',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'consultationPhone',
      title: 'Primary Phone Number',
      type: 'string',
      description: 'Displayed on contact page and footer.',
      initialValue: '+92 313 4891684',
    }),
    defineField({
      name: 'officialEmail',
      title: 'Official Inquiries Email',
      type: 'string',
      initialValue: 'contact@iclc.com.pk',
    }),
    defineField({
      name: 'officeHours',
      title: 'General Office Working Hours',
      type: 'string',
      initialValue: 'Monday – Saturday: 9:00 AM – 6:00 PM',
    }),

    // DYNAMIC OFFICES (Single or Multiple)
    defineField({
      name: 'offices',
      title: 'Office Locations (Single or Multiple)',
      type: 'array',
      description: 'Configure firm office locations. If 1 office is entered, only that office will be shown everywhere. If multiple offices are added, all locations will be displayed dynamically in the Footer, Contact page, and Google Local Business schema. Drag and drop to re-order.',
      of: [
        {
          type: 'object',
          name: 'office',
          title: 'Office Location',
          fields: [
            defineField({
              name: 'title',
              title: 'Office Title / City',
              type: 'string',
              description: 'e.g. "Lahore Head Office", "Islamabad Office", "Karachi Branch"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'tagline',
              title: 'Branch Tagline / Subtitle (Optional)',
              type: 'string',
              description: 'e.g. "Principal Headquarters", "Regional Branch"',
            }),
            defineField({
              name: 'address',
              title: 'Street Address',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'phones',
              title: 'Phone Numbers',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Click "Add item" to add one or more phone numbers for this location (e.g. "0313-4891684", "0345-1042352")',
            }),
            defineField({
              name: 'email',
              title: 'Branch Email (Optional)',
              type: 'string',
              description: 'Specific email for this branch (e.g. "official@iclc.com.pk"). If left blank, general email will be used.',
            }),
            defineField({
              name: 'hours',
              title: 'Office Hours',
              type: 'string',
              description: 'e.g. "Mon - Sat: 9:00 AM - 6:00 PM"',
              initialValue: 'Mon - Sat: 9:00 AM - 6:00 PM',
            }),
            defineField({
              name: 'mapUrl',
              title: 'Google Maps Link (Optional)',
              type: 'url',
              description: 'Link for "Get Directions" navigation button.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'address',
            },
          },
        },
      ],
    }),

    // Legacy fields kept for backward compatibility
    defineField({
      name: 'lahoreOffice',
      title: 'Legacy Lahore Office (Use "Office Locations" above instead)',
      type: 'object',
      hidden: true,
      fields: [
        defineField({ name: 'address', title: 'Street Address', type: 'text', rows: 2 }),
        defineField({ name: 'phone', title: 'Office Phone', type: 'string' }),
        defineField({ name: 'mapUrl', title: 'Google Maps Link', type: 'url' }),
      ],
    }),
    defineField({
      name: 'islamabadOffice',
      title: 'Legacy Islamabad Office (Use "Office Locations" above instead)',
      type: 'object',
      hidden: true,
      fields: [
        defineField({ name: 'address', title: 'Street Address', type: 'text', rows: 2 }),
        defineField({ name: 'phone', title: 'Office Phone', type: 'string' }),
        defineField({ name: 'mapUrl', title: 'Google Maps Link', type: 'url' }),
      ],
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Media Profiles',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'X (Twitter) URL', type: 'url' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'firmName',
      subtitle: 'whatsappNumber',
    },
  },
});
