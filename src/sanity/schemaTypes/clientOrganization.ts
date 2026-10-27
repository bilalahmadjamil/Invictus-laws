import { defineType, defineField } from 'sanity';

export const clientOrganization = defineType({
  name: 'clientOrganization',
  title: 'Client & Partner Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization / Company Name',
      type: 'string',
      description: 'e.g. "EXIM Bank", "Pakistan Red Crescent Society", "PMIC"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo / Image (Optional)',
      type: 'image',
      description: 'Upload a clean transparent PNG or SVG logo. If left blank, the company name will automatically be displayed in elegant typography.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Priority / Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1, 2, 3...).',
      initialValue: 10,
    }),
    defineField({
      name: 'active',
      title: 'Active (Show in Marquee)',
      type: 'boolean',
      description: 'Toggle OFF to hide this organization from the homepage marquee without deleting it.',
      initialValue: true,
    }),
    defineField({
      name: 'website',
      title: 'Website Link (Optional)',
      type: 'url',
      description: 'Optional URL to the organization’s website.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      order: 'order',
      media: 'logo',
      active: 'active',
    },
    prepare({ title, order, media, active }) {
      return {
        title: `${title || 'Unnamed'}${active === false ? ' (Hidden)' : ''}`,
        subtitle: `#${order ?? 10} • ${media ? 'Has Logo' : 'Name Only'}`,
        media,
      };
    },
  },
});
