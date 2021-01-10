import React, { useState, useEffect } from 'react'
import OverthoughtSubscribeBox from '../../Thoughts/Subscribe'
import SyntaxHighlighter from '../../SyntaxHighlighter'
import SEO from './SEO'
import Feedback from '../Feedback'
import { FeaturedImage } from './style'
import GlobalPrismStyles from '../../GlobalStyles/prism'
import { format } from 'timeago.js'
import { CenteredColumn } from '../../Layouts'
import Markdown from '../../MarkdownRenderer'

export default function PostView({ post }) {
  const [locale, setLocale] = useState(process.env.DEFAULT_LOCALE)
  const [translated, setTranslated] = useState(false)

  useEffect(()=> {
    if(post.content['en-US']) {
      setTranslated(true)
    }
  }, [])
  return (
    <React.Fragment>
      <SyntaxHighlighter data={post} />
      <GlobalPrismStyles />
      <SEO post={post} />

      <CenteredColumn data-cy="overthought-post">
        <div className="flex flex-col space-y-8">
          {post.featured_image && (
            <FeaturedImage
              alt={post.title[locale]}
              loading="lazy"
              src={post.featured_image}
            />
          )}
          <div className="flex flex-col space-y-4">
            <h1>{post.title[locale]}</h1>
            <p className="p-small">Updated {format(post.updatedAt['id-ID'])}</p>
          </div>
          {/* if translation is available */}
          {
            translated && (
              <div className="flex flex-row items-center justify-between p-4 text-sm bg-gray-100 rounded-lg dark:bg-gray-900">
                <p>{locale === 'en-US' ? 'Artikel tersedia dalam Bahasa Indonesia' : 'This article also available in English'}</p>
                <button className="border-b border-gray-500 dark:text-white" 
                  onClick={()=>{setLocale(locale === 'en-US' ? 'id-ID' : 'en-US')}} >
                {locale === 'en-US' ? 'Ganti ke Bahasa' : 'Change to English'}</button>
              </div>
            )
          }
        </div>

        <div
          style={{ marginTop: '16px' }}
          className="prose lg:prose-lg prose-blue">
            <Markdown>{post.content[locale]}</Markdown>
          </div>

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
