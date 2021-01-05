import * as React from 'react'
import OverthoughtSubscribeBox from '../../Thoughts/Subscribe'
import SyntaxHighlighter from '../../SyntaxHighlighter'
import SEO from './SEO'
import Feedback from '../Feedback'
import { FeaturedImage } from './style'
import GlobalPrismStyles from '../../GlobalStyles/prism'
import { format } from 'timeago.js'
import { CenteredColumn } from '../../Layouts'

export default function PostView({ post }) {
  return (
    <React.Fragment>
      <SyntaxHighlighter data={post} />
      <GlobalPrismStyles />
      <SEO post={post} />

      <CenteredColumn data-cy="overthought-post">
        <div className="flex flex-col space-y-8">
          {post.featured_image && (
            <FeaturedImage
              alt={post.title}
              loading="lazy"
              src={post.featured_image}
            />
          )}
          <div className="flex flex-col space-y-4">
            <h1>{post.title}</h1>
            <p className="p-small">Updated {format(post.modified)}</p>
          </div>
        </div>

        <div
          style={{ marginTop: '16px' }}
          className="prose lg:prose-lg prose-blue"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-col space-y-8">
          <div />
          <div />
          <Feedback post={post} />
          <OverthoughtSubscribeBox />
        </div>
      </CenteredColumn>
    </React.Fragment>
  )
}
