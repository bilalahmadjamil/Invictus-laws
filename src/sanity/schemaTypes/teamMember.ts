import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member / Attorney',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
      description: 'e.g. Managing Partner, Executive Partner, Partner, Senior Associate, Associate',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: '⭐ Feature on Homepage',
      type: 'boolean',
      description: 'Toggle ON to display this attorney in the Team preview section on the Homepage. All active attorneys remain visible on the /team page.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Priority / Order',
      type: 'number',
      description: 'Attorneys are sorted by this number (1 appears first, then 2, 3, etc.) on both the Homepage and the Team directory.',
      initialValue: 10,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'Active (Show on Website)',
      type: 'boolean',
      description: 'Toggle OFF to hide this attorney from the website without deleting their profile.',
      initialValue: true,
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'string',
      description: 'e.g. Advocate High Court | LL.B. (Hons.) from UMT',
    }),
    defineField({
      name: 'location',
      title: 'Office Location',
      type: 'string',
      options: {
        list: [
          { title: 'Lahore', value: 'Lahore' },
          { title: 'Islamabad', value: 'Islamabad' },
          { title: 'Both Offices', value: 'Lahore & Islamabad' },
        ],
      },
      initialValue: 'Lahore',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true, // Click face to keep centered
      },
    }),
    defineField({
      name: 'bio',
      title: 'Professional Biography',
      type: 'text',
      rows: 4,
      description: 'Background, areas of practice, notable cases, and achievements.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      featured: 'featured',
      order: 'order',
      media: 'image',
    },
    prepare({ title, role, featured, order, media }) {
      return {
        title: `${title || 'Untitled'}${featured ? ' ⭐ (Featured on Home)' : ''}`,
        subtitle: `#${order ?? 10} • ${role || 'Attorney'}`,
        media,
      };
    },
  },
});
