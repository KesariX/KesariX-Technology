import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ─────────────────────────────────────────────────────────────
   SITE-WIDE METADATA — single source of truth
───────────────────────────────────────────────────────────── */
export const siteMetadata = {
  siteUrl: 'https://kesarixtechnology.com',
  companyName: 'KesariX Technology',
  companyLegalName: 'KesariX Technology Private Limited',
  logoUrl: 'https://kesarixtechnology.com/Kesarix-technology-logo.webp',
  ogImage: 'https://kesarixtechnology.com/og-image.jpg',
  email: 'info@kesarixtechnology.com',
  phone: '+91-92747-39361',
  foundingDate: '2023',
  twitterHandle: '@kesarixtechnology',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Remote Operations',
    addressLocality: 'Gujarat',
    addressRegion: 'Gujarat',
    postalCode: '390000',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.2587',
    longitude: '71.1924',
  },
  openingHours: ['Mo-Fr 09:00-19:00', 'Sa 10:00-16:00'],
  social: [
    'https://www.linkedin.com/company/kesarix-technology',
    'https://twitter.com/kesarixtechnology',
    'https://github.com/KesariX',
  ],
  /* Countries + key Indian cities for areaServed */
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Italy' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Country', name: 'New Zealand' },
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'Switzerland' },
    { '@type': 'Country', name: 'Norway' },
    { '@type': 'Country', name: 'Sweden' },
    { '@type': 'Country', name: 'Denmark' },
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'South Korea' },
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Surat' },
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Rajkot' },
    { '@type': 'City', name: 'Bhavnagar' },
    { '@type': 'City', name: 'Jamnagar' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'Junagadh' },
    { '@type': 'City', name: 'Gandhidham' },
    { '@type': 'City', name: 'Anand' },
    { '@type': 'City', name: 'Navsari' },
    { '@type': 'City', name: 'Morbi' },
    { '@type': 'City', name: 'Nadiad' },
    { '@type': 'City', name: 'Bharuch' },
    { '@type': 'City', name: 'Porbandar' },
    { '@type': 'City', name: 'Veraval' },
    { '@type': 'City', name: 'Bhuj' },
    { '@type': 'City', name: 'Valsad' },
    { '@type': 'City', name: 'Vapi' },
    { '@type': 'City', name: 'Godhra' },
    { '@type': 'City', name: 'Palanpur' },
    { '@type': 'City', name: 'Ankleshwar' },
    { '@type': 'City', name: 'Patan' },
    { '@type': 'City', name: 'Kalol' },
    { '@type': 'City', name: 'Dahod' },
    { '@type': 'City', name: 'Mehsana' },
    { '@type': 'City', name: 'Surendranagar' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Jaipur' },
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Indore' },
    { '@type': 'City', name: 'Bhopal' },
    { '@type': 'City', name: 'Nagpur' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Chandigarh' },
    { '@type': 'City', name: 'Patna' },
    { '@type': 'City', name: 'Bhubaneswar' },
    { '@type': 'City', name: 'Visakhapatnam' },
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'City', name: 'Guwahati' },
    { '@type': 'City', name: 'Dehradun' },
    { '@type': 'City', name: 'Jodhpur' },
    { '@type': 'City', name: 'Udaipur' },
    { '@type': 'City', name: 'Amritsar' },
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'City', name: 'Mysore' },
    { '@type': 'City', name: 'Ranchi' },
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'London' },
    { '@type': 'City', name: 'New York' },
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'City', name: 'Berlin' },
    { '@type': 'City', name: 'Singapore' },
    { '@type': 'City', name: 'Riyadh' },
  ],
  services: [
    'AI Development', 'Artificial Intelligence Solutions', 'LLM Development',
    'GPT Integration', 'Claude Integration', 'Gemini Integration',
    'RAG Development', 'Vector Database Integration', 'Fine-tuning LLMs',
    'AI Chatbot Development', 'Voice AI', 'Document AI', 'Computer Vision',
    'AI Agent Development', 'Multi-Agent Systems', 'Prompt Engineering',
    'Custom AI Solutions', 'AI Automation Agency',
    'Web Development', 'React Development', 'Next.js Development',
    'Full Stack Development', 'MERN Stack Development', 'Node.js Development',
    'Frontend Development', 'Backend Development', 'TypeScript Development',
    'API Development', 'GraphQL Development', 'Microservices Architecture',
    'Corporate Website Development', 'Business Website Development',
    'Landing Page Development', 'E-commerce Development', 'SaaS Development',
    'Mobile App Development', 'Flutter Development', 'React Native Development',
    'iOS App Development', 'Android App Development', 'Cross-Platform Apps',
    'CRM Development', 'ERP Development', 'HRMS Development',
    'Enterprise Software Development', 'Startup MVP Development',
    'Admin Dashboard Development', 'Payment Gateway Integration',
    'Workflow Automation', 'Business Automation', 'n8n Automation',
    'Make (Integromat) Automation', 'Zapier Integration', 'CRM Automation',
    'Lead Automation', 'Email Automation', 'WhatsApp Automation',
    'Digital Transformation', 'Software Consulting', 'IT Consulting',
    'Performance Optimization', 'Cloud Infrastructure', 'DevOps',
  ],
};

/* hreflang locales for international SEO */
const HREFLANG_LOCALES = [
  { lang: 'en', hrefLang: 'en' },
  { lang: 'en-IN', hrefLang: 'en-IN' },
  { lang: 'en-US', hrefLang: 'en-US' },
  { lang: 'en-GB', hrefLang: 'en-GB' },
  { lang: 'en-CA', hrefLang: 'en-CA' },
  { lang: 'en-AU', hrefLang: 'en-AU' },
  { lang: 'en-SG', hrefLang: 'en-SG' },
  { lang: 'en-AE', hrefLang: 'en-AE' },
  { lang: 'en-SA', hrefLang: 'en-SA' },
  { lang: 'en-QA', hrefLang: 'en-QA' },
  { lang: 'en-NZ', hrefLang: 'en-NZ' },
  { lang: 'en-IE', hrefLang: 'en-IE' },
  { lang: 'en-ZA', hrefLang: 'en-ZA' },
  { lang: 'en-MY', hrefLang: 'en-MY' },
  { lang: 'de', hrefLang: 'de' },
  { lang: 'fr', hrefLang: 'fr' },
  { lang: 'it', hrefLang: 'it' },
  { lang: 'es', hrefLang: 'es' },
  { lang: 'nl', hrefLang: 'nl' },
  { lang: 'sv', hrefLang: 'sv' },
  { lang: 'no', hrefLang: 'no' },
  { lang: 'da', hrefLang: 'da' },
  { lang: 'ja', hrefLang: 'ja' },
  { lang: 'ko', hrefLang: 'ko' },
];

/* ─────────────────────────────────────────────────────────────
   SEO COMPONENT
   Props:
     title          – page title (without site suffix)
     description    – meta description (max ~155 chars recommended)
     keywords       – comma-separated page-specific keywords
     canonicalUrl   – path e.g. "/service/neural-architecture" (no trailing slash)
     ogImage        – full OG image URL
     type           – og:type ("website" | "article")
     noIndex        – if true, set robots noindex,nofollow
     isHomePage     – enables homepage-specific schemas
     isServicePage  – enables Service schema
     breadcrumbs    – array of { name, url } for BreadcrumbList JSON-LD
     faqs           – array of { question, answer } for FAQPage JSON-LD
     article        – { title, description, publishedTime, modifiedTime, author, image }
     aggregateRating– { ratingValue, reviewCount, bestRating }
     schemaData     – extra raw JSON-LD schema(s) to inject (object or array)
───────────────────────────────────────────────────────────── */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl = '',
  ogImage,
  type = 'website',
  noIndex = false,
  isHomePage = false,
  isServicePage = false,
  breadcrumbs = null,
  faqs = null,
  article = null,
  aggregateRating = null,
  schemaData = null,
}) {
  const { siteUrl, companyName, twitterHandle } = siteMetadata;

  /* ── Title ── */
  const fullTitle = title
    ? `${title} | ${companyName}`
    : `${companyName} — AI Solutions, Web & Mobile Development | Gujarat, India`;

  /* ── Description fallback ── */
  const finalDescription =
    description ||
    `${companyName} builds production AI agents, enterprise web platforms, mobile apps & intelligent automation. 5+ projects shipped. 98% client satisfaction. Remote Operations | Based in Gujarat, India | Delivering Worldwide.`;

  /* ── Keywords ── */
  const baseKeywords =
    'AI Development Company India, Web Development Company, Software Development India, AI Agency, Digital Transformation, React Development, Next.js, Mobile App Development, CRM Development, ERP Development, Gujarat, Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Bhavnagar, Jamnagar, Junagadh, Gandhidham, Anand, Bharuch, Navsari, Morbi, Nadiad, Mumbai, Delhi, Bangalore, Hyderabad, USA, UK, Canada, Australia, UAE';
  const finalKeywords = keywords ? `${keywords}, ${baseKeywords}` : baseKeywords;

  /* ── Canonical & full URL ── */
  const canonicalHref = `${siteUrl}${canonicalUrl}`;

  /* ── Robots ── */
  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  /* ── OG Image ── */
  const finalOgImage = ogImage || siteMetadata.ogImage;

  /* ────────────────────────────────────────────────
     JSON-LD SCHEMA GENERATION
  ──────────────────────────────────────────────── */
  const buildSchemas = () => {
    const schemas = [];

    /* 1 — Organization + LocalBusiness (every page) */
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': `${siteUrl}/#organization`,
      name: siteMetadata.companyName,
      legalName: siteMetadata.companyLegalName,
      alternateName: 'KesariX',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteMetadata.logoUrl,
        width: 200,
        height: 60,
      },
      image: siteMetadata.logoUrl,
      description:
        'KesariX Technology is a premier AI development and digital transformation agency delivering custom AI agents, LLM solutions, enterprise web platforms, mobile apps, and automation systems globally.',
      foundingDate: siteMetadata.foundingDate,
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
      address: siteMetadata.address,
      geo: siteMetadata.geo,
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '16:00' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteMetadata.phone,
          contactType: 'customer service',
          email: siteMetadata.email,
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
          areaServed: 'Worldwide',
        },
        {
          '@type': 'ContactPoint',
          telephone: siteMetadata.phone,
          contactType: 'sales',
          email: siteMetadata.email,
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
        },
      ],
      sameAs: siteMetadata.social,
      areaServed: siteMetadata.areaServed,
      knowsAbout: siteMetadata.services,
      priceRange: '$$',
      currenciesAccepted: 'INR, USD, GBP, EUR, AED',
      paymentAccepted: 'Bank Transfer, Credit Card, PayPal, UPI',
      hasMap: `https://www.google.com/maps?q=Gujarat+India`,
    };

    /* Add OfferCatalog on homepage */
    if (isHomePage) {
      orgSchema.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        name: 'KesariX Technology Services',
        itemListElement: siteMetadata.services.slice(0, 20).map((s, i) => ({
          '@type': 'Offer',
          position: i + 1,
          itemOffered: { '@type': 'Service', name: s },
        })),
      };
    }

    /* Add AggregateRating on homepage or service pages */
    if (aggregateRating) {
      orgSchema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue || '4.9',
        reviewCount: aggregateRating.reviewCount || '47',
        bestRating: aggregateRating.bestRating || '5',
        worstRating: '1',
      };
    }

    schemas.push(orgSchema);

    /* 2 — WebSite + SearchAction (every page) */
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: companyName,
      url: siteUrl,
      description: finalDescription,
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-IN',
    });

    /* 3 — WebPage (every page) */
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalHref}#webpage`,
      url: canonicalHref,
      name: fullTitle,
      description: finalDescription,
      isPartOf: { '@id': `${siteUrl}/#website` },
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-IN',
      datePublished: '2023-01-01',
      dateModified: new Date().toISOString().split('T')[0],
    });

    /* 4 — BreadcrumbList (when breadcrumbs prop is passed) */
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${siteUrl}${crumb.url}`,
        })),
      });
    }

    /* 5 — Service Schema (service pages) */
    if (isServicePage) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description: finalDescription,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: siteMetadata.areaServed,
        url: canonicalHref,
        serviceType: title,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          seller: { '@id': `${siteUrl}/#organization` },
        },
      });
    }

    /* 6 — FAQPage (when faqs prop is passed) */
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    /* 7 — Article Schema (blog posts) */
    if (article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title || title,
        description: article.description || finalDescription,
        image: article.image || finalOgImage,
        author: {
          '@type': 'Organization',
          name: companyName,
          url: siteUrl,
        },
        publisher: { '@id': `${siteUrl}/#organization` },
        datePublished: article.publishedTime || '2025-01-01',
        dateModified: article.modifiedTime || article.publishedTime || '2025-01-01',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalHref },
        url: canonicalHref,
        inLanguage: 'en-IN',
        isAccessibleForFree: true,
      });
    }

    /* 8 — Extra custom schemas */
    if (schemaData) {
      if (Array.isArray(schemaData)) schemas.push(...schemaData);
      else schemas.push(schemaData);
    }

    return JSON.stringify(schemas);
  };

  return (
    <Helmet>
      {/* ── Primary Meta Tags ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={companyName} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="theme-color" content="#03081a" />
      <meta name="application-name" content={companyName} />
      <meta name="generator" content="KesariX Technology" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={canonicalHref} />

      {/* ── hreflang — full international coverage ── */}
      {HREFLANG_LOCALES.map(({ hrefLang }) => (
        <link
          key={hrefLang}
          rel="alternate"
          hrefLang={hrefLang}
          href={canonicalHref}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalHref} />

      {/* ── RSS Feed Discovery ── */}
      <link rel="alternate" type="application/rss+xml" title={`${companyName} Blog`} href={`${siteUrl}/feed.xml`} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${companyName} — ${title || 'AI & Software Development Company'}`} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AE" />

      {/* Article-specific OG tags */}
      {article && <meta property="article:published_time" content={article.publishedTime} />}
      {article && <meta property="article:modified_time" content={article.modifiedTime || article.publishedTime} />}
      {article && <meta property="article:author" content={companyName} />}
      {article && <meta property="article:section" content="Technology" />}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={canonicalHref} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={`${companyName} — ${title || 'AI & Software Development Company'}`} />

      {/* ── Geo / Regional ── */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Gujarat, India" />
      <meta name="geo.position" content="22.2587;71.1924" />
      <meta name="ICBM" content="22.2587, 71.1924" />

      {/* ── Verification tags ── */}
      {/* Google: already via gtag in index.html */}
      <meta name="msvalidate.01" content="BING_VERIFICATION_CODE_HERE" />

      {/* ── JSON-LD Structured Data ── */}
      <script type="application/ld+json">{buildSchemas()}</script>
    </Helmet>
  );
}
