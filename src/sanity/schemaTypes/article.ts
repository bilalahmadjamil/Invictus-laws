import { defineType, defineField, defineArrayMember } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Blog Article / Legal Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required for Google indexing and display.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'The URL path (e.g., copyright-registration). Click "Generate" to create automatically from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required so Google can link to this article.'),
    }),
    defineField({
      name: 'featured',
      title: '⭐ Feature on Homepage',
      type: 'boolean',
      description: 'Toggle ON to display this article on the Homepage. Only featured articles appear on the homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Priority / Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1 = highest priority). If same or empty, articles are ordered by publication date.',
      initialValue: 10,
    }),
    defineField({
      name: 'category',
      title: 'Practice Category',
      type: 'string',
      options: {
        list: [
          { title: 'Legal Guides', value: 'Legal Guides' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Litigation', value: 'Litigation' },
          { title: 'Cyber Law', value: 'Cyber Law' },
          { title: 'Intellectual Property', value: 'Intellectual Property' },
          { title: 'Family Law', value: 'Family Law' },
          { title: 'Banking & Finance', value: 'Banking & Finance' },
          { title: 'Alternative Dispute Resolution (ADR)', value: 'Alternative Dispute Resolution (ADR)' },
          { title: 'Other', value: 'Other' },
        ],
      },
      initialValue: 'Legal Guides',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      initialValue: '6 min read',
      description: 'e.g. "6 min read"',
    }),
    defineField({
      name: 'author',
      title: 'Author / Firm Credit',
      type: 'string',
      initialValue: 'ICLC Legal Research Team',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Cover Image',
      type: 'image',
      description: 'Shown at top of article and as OpenGraph preview when shared on WhatsApp/LinkedIn.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (For Google Image Search)',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Article Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Short preview shown on cards and in Google search descriptions.',
      validation: (Rule) => Rule.max(250).warning('Excerpts under 160-200 characters perform best on Google.'),
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal Paragraph', value: 'normal' },
            { title: 'Main Heading (H2)', value: 'h2' },
            { title: 'Sub Heading (H3)', value: 'h3' },
            { title: 'Section Title (H4)', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet List', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong / Bold', value: 'strong' },
              { title: 'Emphasis / Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Target URL',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Google SEO & Social Settings',
      type: 'object',
      description: 'Fine-tune how Google and social media preview this specific article.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Google Search Title',
          type: 'string',
          description: 'Overrides standard article title on Google search results (recommended ~60 chars).',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Google Search Description',
          type: 'text',
          rows: 2,
          description: 'Custom snippet for Google search (recommended 140-160 chars).',
        }),
        defineField({
          name: 'keywords',
          title: 'SEO Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
          description: 'e.g. "Copyright Law Pakistan", "Lahore High Court Lawyer"',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Priority & Date',
      name: 'priorityAndDate',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
