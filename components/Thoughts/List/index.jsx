import { format } from 'timeago.js'
import Link from 'next/link'

export default function OverthoughtList({ posts }) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-5">
      {posts.map((post) => (
        <div key={post.ID} className="flex flex-col space-y-1">
          <Link
            href="/thoughts/[slug]"
            as={`/thoughts/${post.slug}`}
            passHref
          >
            <a className="text-blue-600 dark:text-blue-500">{post.title}</a>
          </Link>
          {post.excerpt && <p className="clamp-2">{post.excerpt.replace(/(<([^>]+)>)/gi, "")}</p>}
          <p className="p-small">Updated {format(post.modified)}</p>
        </div>
      ))}
    </div>
  )
}
