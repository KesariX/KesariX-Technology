import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteMetadata = {
  siteUrl: 'https://kesarixtechnology.com',
  companyName: 'KesariX Technology',
  logoUrl: 'https://kesarixtechnology.com/favicon.svg', // Update if necessary
  email: 'info@kesarixtechnology.com',
  phone: '+91-92747-39361',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    postalCode: '395001',
    addressCountry: 'IN'
  },
  social: [
    'https://www.linkedin.com/company/kesarix-technology',
    'https://twitter.com/kesarixtechnology'
  ],
  targetLocations: [
    { '@type': 'Country', 'name': 'India' },
    { '@type': 'Country', 'name': 'United States' },
    { '@type': 'Country', 'name': 'Canada' },
    { '@type': 'Country', 'name': 'United Kingdom' },
    { '@type': 'Country', 'name': 'Australia' },
    { '@type': 'Country', 'name': 'Germany' },
    { '@type': 'Country', 'name': 'France' },
    { '@type': 'Country', 'name': 'Italy' },
    { '@type': 'Country', 'name': 'Spain' },
    { '@type': 'Country', 'name': 'Netherlands' },
    { '@type': 'Country', 'name': 'Singapore' },
    { '@type': 'Country', 'name': 'United Arab Emirates' },
    { '@type': 'Country', 'name': 'Saudi Arabia' },
    { '@type': 'Country', 'name': 'Qatar' },
    { '@type': 'Country', 'name': 'New Zealand' },
    { '@type': 'Country', 'name': 'Ireland' },
    { '@type': 'Country', 'name': 'Switzerland' },
    { '@type': 'Country', 'name': 'Belgium' },
    { '@type': 'Country', 'name': 'Norway' },
    { '@type': 'Country', 'name': 'Sweden' },
    { '@type': 'Country', 'name': 'Denmark' },
    { '@type': 'City', 'name': 'Ahmedabad' },
    { '@type': 'City', 'name': 'Surat' },
    { '@type': 'City', 'name': 'Vadodara' },
    { '@type': 'City', 'name': 'Rajkot' },
    { '@type': 'City', 'name': 'Mumbai' },
    { '@type': 'City', 'name': 'Delhi' },
    { '@type': 'City', 'name': 'Pune' },
    { '@type': 'City', 'name': 'Hyderabad' },
    { '@type': 'City', 'name': 'Bangalore' },
    { '@type': 'City', 'name': 'Chennai' },
    { '@type': 'City', 'name': 'Kolkata' },
    { '@type': 'City', 'name': 'Jaipur' },
    { '@type': 'City', 'name': 'Indore' },
    { '@type': 'City', 'name': 'Lucknow' },
    { '@type': 'City', 'name': 'Dubai' },
    { '@type': 'City', 'name': 'London' },
    { '@type': 'City', 'name': 'New York' },
    { '@type': 'City', 'name': 'Toronto' },
    { '@type': 'City', 'name': 'Sydney' },
    { '@type': 'City', 'name': 'Berlin' },
    { '@type': 'City', 'name': 'Rome' },
    { '@type': 'City', 'name': 'Paris' },
  ],
  services: [
    "Custom Website Development", "Business Website Development", "Corporate Website Development", 
    "Portfolio Website Development", "Landing Page Development", "E-commerce Website Development",
    "Shopify Development", "WooCommerce Development", "WordPress Development", "Custom CMS Development",
    "React Development", "Next.js Development", "MERN Stack Development", "Full Stack Development",
    "Frontend Development", "Backend Development", "Node.js Development", "Express.js Development",
    "MongoDB Development", "API Development", "REST API", "GraphQL", "Dashboard Development",
    "Admin Panel Development", "CRM Development", "ERP Development", "HRMS Development",
    "Inventory Management System", "Billing Software", "Hospital Management Software",
    "School Management Software", "Hotel Management Software", "Restaurant POS Software",
    "Mobile App Development", "Android App Development", "iOS App Development", "Flutter Development",
    "React Native Development", "Cross Platform Apps", "Web Applications", "SaaS Development",
    "AI Development", "AI Chatbots", "AI Agents", "RAG Systems", "LLM Integration", "OpenAI Integration",
    "Claude Integration", "Gemini Integration", "AI Automation", "Workflow Automation",
    "Business Process Automation", "CRM Automation", "Email Automation", "WhatsApp Automation",
    "Lead Generation Automation", "Marketing Automation", "SEO Services",
    "Performance Optimization", "Website Maintenance", "UI/UX Design", "Brand Identity",
    "Digital Transformation", "Software Consulting", "Technical Consulting", "IT Consulting"
  ]
};

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = 'https://kesarixtechnology.com/og-image.jpg', 
  type = 'website',
  schemaData = null,
  isServicePage = false,
  isHomePage = false
}) {
  const fullTitle = title ? `${title} | KesariX Technology` : "KesariX Technology — AI Solutions, Web & Mobile Development | Surat, India";
  
  // Default keywords combined with page-specific ones
  const defaultKeywords = "Web Development Company, Software Company, Digital Agency, AI Development Company, CRM Development, ERP Development, India, USA, UK, Canada, Australia";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
  const generateSchema = () => {
    let schemaArray = [];

    // Base Organization Schema (for all pages)
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": ["Organization", "Corporation", "ProfessionalService", "LocalBusiness"],
      "name": siteMetadata.companyName,
      "alternateName": "KesariX",
      "url": siteMetadata.siteUrl,
      "logo": siteMetadata.logoUrl,
      "description": "KesariX Technology is a premier digital transformation agency providing Custom Website Development, AI Solutions, SaaS Development, Mobile Apps, CRM, and ERP solutions globally.",
      "foundingDate": siteMetadata.foundingDate,
      "address": siteMetadata.address,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": siteMetadata.phone,
          "contactType": "customer service",
          "email": siteMetadata.email,
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        }
      ],
      "sameAs": siteMetadata.social,
      "areaServed": siteMetadata.targetLocations,
      "knowsAbout": siteMetadata.services,
      "image": siteMetadata.logoUrl,
      "priceRange": "$$"
    };

    if (isHomePage) {
      // Add OfferCatalog schema to homepage
      const offerCatalog = {
        "@type": "OfferCatalog",
        "name": "KesariX Technology Services",
        "description": "Comprehensive IT and Digital Services",
        "itemListElement": siteMetadata.services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          },
          "position": index + 1
        }))
      };
      baseOrganization.hasOfferCatalog = offerCatalog;
    }
    
    schemaArray.push(baseOrganization);

    // If page is a Service page, add specific Service Schema
    if (isServicePage) {
       schemaArray.push({
         "@context": "https://schema.org",
         "@type": "Service",
         "serviceType": title,
         "provider": {
           "@type": "LocalBusiness",
           "name": siteMetadata.companyName
         },
         "areaServed": siteMetadata.targetLocations,
         "description": description
       });
    }

    // Add provided custom schema (like Article, FAQ, Breadcrumb, etc.)
    if (schemaData) {
       if (Array.isArray(schemaData)) {
         schemaArray = [...schemaArray, ...schemaData];
       } else {
         schemaArray.push(schemaData);
       }
    }

    return JSON.stringify(schemaArray);
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || "KesariX Technology builds enterprise web platforms, mobile apps, AI agents & intelligent automation. Delivering globally."} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="KesariX Technology" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteMetadata.siteUrl}${canonicalUrl}`} />}
      
      {/* Language Alternates (International SEO preparation) */}
      <link rel="alternate" hrefLang="en" href={`${siteMetadata.siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteMetadata.siteUrl}${canonicalUrl || ''}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${canonicalUrl || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || "KesariX Technology builds enterprise web platforms, mobile apps, AI agents & intelligent automation. Delivering globally."} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${siteMetadata.siteUrl}${canonicalUrl || ''}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || "KesariX Technology builds enterprise web platforms, mobile apps, AI agents & intelligent automation. Delivering globally."} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {generateSchema()}
      </script>
    </Helmet>
  );
}
