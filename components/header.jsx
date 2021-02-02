import Head from "next/head"
const WEBSITE_DESCRIPTION = "Cybersecurity Conference 2021 (Project by JC Lee - Twitter @ljc_dev)"
const WEBSITE_TITLE = "Cybersecurity Conference 2021 - Register now!"
const TWITTER_CARD_SRC = "https://cybersecurity-jclee.vercel.app/images/twitterCard-v1.jpg"

const Header = () => {
  return (
    <Head>
      <title>{WEBSITE_TITLE}</title>
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <title>{WEBSITE_TITLE}</title>
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta itemprop="name" content={WEBSITE_TITLE} />
      <meta itemprop="description" content={WEBSITE_DESCRIPTION} />
      <meta itemprop="image" content={TWITTER_CARD_SRC} />
      <meta property="og:url" content="https://cybersecurity-jclee.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={WEBSITE_TITLE} />
      <meta property="og:description" content={WEBSITE_DESCRIPTION} />
      <meta property="og:image" content={TWITTER_CARD_SRC} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={WEBSITE_TITLE} />
      <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
      <meta name="twitter:image" content={TWITTER_CARD_SRC} />
      <link rel="preload" href="/fonts/OpenSans-Regular.ttf" as="font" type="font/truetype" crossorigin />
      <link rel="preload" href="/fonts/PlayfairDisplay-Bold.ttf" as="font" type="font/truetype" crossorigin />
      <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/truetype" crossorigin />
    </Head>
  )
}

export default Header