import { groq } from 'next-sanity';

// All published articles sorted by admin priority order, then publication date
export const articlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    readTime,
    author,
    mainImage,
    excerpt,
    featured,
    order
  }
`;

// Featured articles for Homepage (only articles with featured == true)
export const featuredArticlesQuery = groq`
  *[_type == "article" && defined(slug.current) && featured == true] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    readTime,
    author,
    mainImage,
    excerpt,
    featured,
    order
  }
`;

// Single article by slug (with full body & SEO)
export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    readTime,
    author,
    mainImage,
    excerpt,
    featured,
    order,
    body,
    seo
  }
`;

// All article slugs for dynamic sitemap.xml
export const allArticleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  }
`;

// Featured team members for Homepage (only attorneys with active == true && featured == true)
export const featuredTeamMembersQuery = groq`
  *[_type == "teamMember" && active == true && featured == true] | order(order asc) {
    _id,
    name,
    role,
    qualifications,
    location,
    order,
    featured,
    image,
    bio
  }
`;

// All active team members for /team directory (ordered by priority order asc)
export const teamMembersQuery = groq`
  *[_type == "teamMember" && active == true] | order(order asc) {
    _id,
    name,
    role,
    qualifications,
    location,
    order,
    featured,
    image,
    bio
  }
`;

// Active client organizations for homepage marquee
export const clientOrganizationsQuery = groq`
  *[_type == "clientOrganization" && active == true] | order(order asc, _createdAt asc) {
    _id,
    name,
    logo,
    website,
    order
  }
`;

// Active career openings for /careers page
export const jobOpeningsQuery = groq`
  *[_type == "jobOpening" && active == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    location,
    jobType,
    experience,
    department,
    description,
    requirements,
    applicationEmail,
    deadline,
    order
  }
`;

// Global firm settings with dynamic offices
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id in ["siteSettings", "drafts.siteSettings"]][0] {
    firmName,
    whatsappNumber,
    consultationPhone,
    officialEmail,
    officeHours,
    offices[] {
      _key,
      title,
      tagline,
      address,
      phones,
      email,
      hours,
      mapUrl
    },
    lahoreOffice,
    islamabadOffice,
    socialLinks
  }
`;
