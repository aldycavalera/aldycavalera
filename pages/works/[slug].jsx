import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Page from '../../components/Page'
import designDetailsPosts from '../../data/portfolio'
import DesignDetailView from '../../components/DesignDetailView'
import { useRouter } from 'next/router'
import removeMd from 'remove-markdown'

export default function DesignDetail({ post }) {
  const router = useRouter()

  useEffect(() => {
    // handle bad slug
    if (!post) {
      router.push('/works')
    }
  }, [])

  if (post) {
    return (
      <Page>
        <NextSeo
          title={`${post.title} · Portfolio`}
          description={post.description}
          openGraph={{
            url: `https://aldycavalera.com/portfolio/${post.slug}`,
            title: post.title,
            description: removeMd(post.description),
            site_name: 'Portfolio',
            images: [
              {
                url: 'https://aldycavalera.com/static/meta/app-dissection.png',
                alt: 'Portfolio',
              },
            ],
          }}
        />
        <DesignDetailView post={post} />
      </Page>
    )
  }

  return null
}

export async function getStaticPaths() {
  const paths = designDetailsPosts.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      post: designDetailsPosts.find((post) => post.slug === slug),
    },
  }
}
