import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-template-columns: 1fr min(90ch, calc(100% - 64px)) 1fr;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`

export default function Layout({ children, ...customMeta }) {
  const meta = {
    title: 'William Cruz',
    description:
      'William Cruz is a Front-end and JavaScript developer specializing in building and designing exceptional websites, applications, and everything in between.',
    email: 'pequeno@williamcruz.ch',
    image: 'https://williamcruz.ch/static/images/banner.png',
    type: 'website',
    twitterUsername: '@cruzentwickler',
    ...customMeta,
  }

  const router = useRouter()

  return (
    <Wrapper>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />

        <meta
          property="og:url"
          content={`https://williamcruz.ch${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterUsername} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main>{children}</main>
    </Wrapper>
  )
}
