import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Footer, Header } from '@/components/index'

export default function Layout({ children, ...customMeta }) {
  const meta = {
    title: 'William Cruz',
    description:
      'William Cruz is a Front-end and JavaScript developer specializing in building and designing exceptional websites, applications, and everything in between.',
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

        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
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
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(75ch, calc(100% - 64px)) 1fr;
  grid-gap: 32px;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`
