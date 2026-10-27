import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wlu8c7im';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'ICLC Legal Management Studio',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Singleton: Opens Global Site Settings directly
            S.listItem()
              .title('Global Site Settings & Contact Info')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Global Site Settings & Contact Info')
              ),

            // Inquiries & Messages received from website contact form
            S.listItem()
              .title('Client Inquiries & Messages')
              .schemaType('contactInquiry')
              .child(
                S.documentTypeList('contactInquiry')
                  .title('Client Inquiries & Messages')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
              ),

            S.divider(),

            // Articles & Guides
            S.listItem()
              .title('Articles & Legal Guides')
              .schemaType('article')
              .child(S.documentTypeList('article').title('Articles & Legal Guides')),

            // Team Members
            S.listItem()
              .title('Team Members & Attorneys')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team Members & Attorneys')),

            // Career Openings & Vacancies
            S.listItem()
              .title('Career Openings & Vacancies')
              .schemaType('jobOpening')
              .child(
                S.documentTypeList('jobOpening')
                  .title('Career Openings & Vacancies')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            // Client Organizations
            S.listItem()
              .title('Trusted Clients & Organizations')
              .schemaType('clientOrganization')
              .child(S.documentTypeList('clientOrganization').title('Trusted Clients & Organizations')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
