import { format } from 'timeago.js'
import Link from 'next/link'

export default function OverthoughtList({ posts }) {
  if (!posts || posts.length === 0) return null
  const lang = process.env.DEFAULT_LOCALE
  return (
    <div className="flex flex-col space-y-5">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col space-y-1">
          <Link
            href="/thoughts/[slug]"
            as={`/thoughts/${post.fields.slug[lang]}`}
            passHref
          >
            <a className="text-blue-600 dark:text-blue-500">{post.fields.title[lang]}</a>
          </Link>
          {post.fields.excerpt[lang] && <p className="clamp-2">{post.fields.excerpt[lang].replace(/(<([^>]+)>)/gi, "")}</p>}
          <p className="p-small">Updated {format(post.fields.updatedAt[lang])}</p>
        </div>
      ))}
    </div>
  )
}
