import Head from "next/head"
import { useRouter } from "next/router";

const Seo = ({ seo }) => {
  console.log('Seodata in seo', seo)
  const siteName = 'Trady'
  const siteUrl = 'https://trady.com/'
  let fullSeo = {}
  if(seo && seo.metaTitle){
    fullSeo = {
      metaTitle: `${seo.metaTitle} | ${siteName}`,
      metaDescription: seo.metaDescription,
      shareImage: seo.sharedImage.media.data[0].attributes.url,
      article: seo.article ? seo.article : false,
      preventIndexing: seo.preventIndexing
    }
  }
  

  const router = useRouter();
  const canonicalUrl = (siteUrl + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      {fullSeo.preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

export default Seo