import { defineType, defineField } from 'sanity';

export const jobOpening = defineType({
  name: 'jobOpening',
  title: 'Career Openings & Jobs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title / Position',
      type: 'string',
      description: 'e.g. "Corporate & Commercial Associate", "Litigation Associate", "Legal Intern"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Office Location',
      type: 'string',
      options: {
        list: [
          { title: 'Lahore Head Office', value: 'Lahore Head Office' },
          { title: 'Islamabad Office', value: 'Islamabad Office' },
          { title: 'Lahore & Islamabad', value: 'Lahore & Islamabad' },
          { title: 'Remote / Hybrid', value: 'Remote / Hybrid' },
        ],
      },
      initialValue: 'Lahore Head Office',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship / Pupilage', value: 'Internship / Pupilage' },
        ],
      },
      initialValue: 'Full-time',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience Level / PQE',
      type: 'string',
      description: 'e.g. "2 - 4 Years PQE", "Law Students & Fresh Graduates", "Senior Level (5+ Years)"',
      initialValue: '2 - 4 Years PQE',
    }),
    defineField({
      name: 'department',
      title: 'Department / Practice Area (Optional)',
      type: 'string',
      description: 'e.g. Corporate Law, Commercial Litigation, Cyber Law',
    }),
    defineField({
      name: 'description',
      title: 'Role Overview & Summary',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requirements',
      title: 'Key Requirements & Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Click "Add item" to add requirement bullet points (e.g. "LL.B. (Hons.) from a recognized institution", "Active High Court license").',
    }),
    defineField({
      name: 'applicationEmail',
      title: 'Application Receiving Email (Optional)',
      type: 'string',
      description: 'Specific email where CVs should be directed. If blank, firm email will be used.',
    }),
    defineField({
      name: 'deadline',
      title: 'Application Deadline (Optional)',
      type: 'date',
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
      title: 'Active (Accepting Applications)',
      type: 'boolean',
      description: 'Toggle OFF when this position is filled or closed.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display Priority',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Date Created',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      jobType: 'jobType',
      active: 'active',
      order: 'order',
    },
    prepare({ title, location, jobType, active, order }) {
      return {
        title: `${title || 'Untitled'}${active === false ? ' (Closed / Inactive)' : ''}`,
        subtitle: `#${order ?? 10} • ${location || 'Lahore'} • ${jobType || 'Full-time'}`,
      };
    },
  },
});
