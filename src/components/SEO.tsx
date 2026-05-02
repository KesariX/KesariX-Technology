import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.kesarixtechnology.com'
const DEFAULT_IMAGE = `${BASE_URL}/kesariX.png`

interface SEOProps {
  title: string
  description: string
  path: string
  ogImage?: string
  schema?: object | object[]
}

export default function SEO({ title, description, path, ogImage, schema }: SEOProps) {
  const canonical = `${BASE_URL}${path}`
  const image = ogImage || DEFAULT_IMAGE
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
