import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter()
  const meta = {
    title: 'William Cruz – Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://williamcruz.ch/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://williamcruz.ch${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
