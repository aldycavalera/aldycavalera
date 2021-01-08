import * as React from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

export default function SEO({ post }) {
  const locale = process.env.DEFAULT_LOCALE
  return (
    <React.Fragment>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for Overthought"
          href="https://aldycavalera.com/thoughts/rss"
        />
      </Head>

      <NextSeo
        title={post.title[locale]}
        description={post.excerpt[locale]}
        openGraph={{
          title: post.title[locale],
          url: `https://aldycavalera.com/thoughts/${post.slug[locale]}`,
          description: post.excerpt[locale],
          images: [
            {
              url:
                post.feature_image ||
                `https://aldycavalera.com/static/img/thoughts/${post.slug[locale]}.png`,
              alt: post.title[locale],
            },
          ],
          site_name: 'Thoughts',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </React.Fragment>
  )
}
