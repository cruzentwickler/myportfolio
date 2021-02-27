import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Footer, Header, Email } from '@/components/index'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(100ch, calc(100% - 64px)) 1fr;
  grid-gap: 32px;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
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
  const { title, description, email, image, type, twitterUsername, date } = meta
  const router = useRouter()

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />

        <meta
          property="og:url"
          content={`https://williamcruz.ch${router.asPath}`}
        />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <main>{children}</main>
      <Email email={email} />
    </Wrapper>
  )
}
