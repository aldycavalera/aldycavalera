import * as React from 'react'
import Page from '../../components/Page'
import PostContainer from '../../components/Thoughts/Post'
import NotFound from '../../components/Thoughts/NotFound'

function OverthoughtPost({ data }) {
  const post = data?.post

  if (!post) return <NotFound />

  return (
    <Page>
      <PostContainer post={post} />
    </Page>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.LOCAL_API_URL}/api/thoughts`)
  const data = await res.json()

  if (!data) return { paths: [], fallback: true }

  const paths = data.items.map((item) => ({
    params: { slug: item.fields.slug[process.env.DEFAULT_LOCALE] },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${process.env.LOCAL_API_URL}/api/thoughts/${slug}`)
  const data = await res.json()
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      slug,
      data: {
        post: data.items[0].fields,
      },
    },
  }
}

export default OverthoughtPost
