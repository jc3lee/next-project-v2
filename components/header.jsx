import Head from "next/head"
const WEBSITE_DESCRIPTION = "Cybersecurity Conference 2021 (Project by JC Lee - Twitter @ljc_dev)"
const Header = ({ title = "Cybersecurity Conference 2021 - Register now!" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default Header