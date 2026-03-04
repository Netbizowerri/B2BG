import { Helmet } from 'react-helmet-async';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://b2bg.org').replace(/\/$/, '');
const SITE_NAME = 'Blessed2Bless Global Empowerment Organisation (B2BG)';
const DEFAULT_OG_IMAGE = 'https://i.ibb.co/xSn1R5Yy/B2BG.png';

interface SeoMetaProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

export default function SeoMeta({ title, description, path, image, noindex = false }: SeoMetaProps) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
