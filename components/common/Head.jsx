// React Components
import Head from 'next/head'
// import GoogleAnalytics from 'next-simple-google-analytics'


export default function CustomHead(head) {
  return (
    <Head>
      <title>{head.title}</title>
      <meta property="og:title" content={head.title} />
      <meta property="og:url" content={head.href} />
      <meta property="og:description" content={head.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={head.image} />
      <meta property="og:image:secure_url" content={head.image} />
      <meta property="og:image:type" content={head.imageType} />
      <meta name="description" content={head.description} />
      <link rel="canonical" href={head.href}></link>
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" href="images/icons/touch-icon-iphone.webp" />
      <link rel="apple-touch-icon" sizes="152x152" href="images/icons/touch-icon-iphone.webp" />
      <link rel="apple-touch-icon" sizes="180x180" href="images/icons/touch-icon-iphone.webp" />
      <link rel="apple-touch-icon" sizes="167x167" href="images/icons/touch-icon-iphone.webp" />
      {/* <GoogleAnalytics id="" /> */}
    </Head>
  )
}