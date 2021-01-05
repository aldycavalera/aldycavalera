import Link from 'next/link'
import Prism from 'prismjs'
import htmlParser from 'react-markdown/plugins/html-parser'
import GlobalStyles from '../GlobalStyles'
import Markdown from 'react-markdown'
import { useEffect, Fragment } from 'react'

const parseHtml = htmlParser({
  isValidNode: (node) => node.type !== 'script',
})

function LinkRenderer(props) {
  const { href, children } = props
  const baseUrl = 'https://brianlovin.com'
  const isSelf = href.indexOf(baseUrl) === 0
  if (isSelf) {
    return (
      <Link href={href === baseUrl ? '/' : href.replace(baseUrl, '')}>
        <a>{children}</a>
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function MarkdownRenderer(props) {
  const { children, ...rest } = props

  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <Fragment>
      <GlobalStyles.PrismStyles />
      <Markdown
        {...rest}
        className="prose lg:prose-lg"
        astPlugins={[parseHtml]}
        renderers={{
          link: LinkRenderer,
        }}
      >
        {children}
      </Markdown>
    </Fragment>
  )
}
