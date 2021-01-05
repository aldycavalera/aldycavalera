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
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/xxthoughtsapi.wordpress.com/posts`)
  const data = await res.json()

  if (!data) return { paths: [], fallback: true }

  const paths = data.posts.map(({ slug }) => ({
    params: { slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/xxthoughtsapi.wordpress.com/posts/slug:${slug}`)
  const data = await res.json()

  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      slug,
      data: {
        post: data,
      },
    },
  }
}

export default OverthoughtPost
