import React from 'react'
import DesignDetailMedia from '../DesignDetailMedia'
import Markdown from '../MarkdownRenderer'
import { format } from 'timeago.js'
import { CenteredColumn } from '../Layouts'
import { PageHeader } from '../Page'
import Image from 'next/image'

export default function DesignDetailView(props) {
  const { post } = props

  const subheading = `Posted ${format(post.createdAt)} · ${
    post.details.length
  } details`

  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-8 md:items-center">
          <Image
            width={'64px'}
            height={'64px'}
            layout="fixed"
            className="rounded-xl"
            src={`/static/img/design-details/${post.slug}.webp`}
            alt={post.title}
          />
          <div className="flex flex-col space-y-2">
            <PageHeader title={post.title} />
            <p className="p-small align-self-center">{subheading}</p>
          </div>
        </div>

        <Markdown>{post.description}</Markdown>

        {post.details.map((detail, i) => (
          <DesignDetailMedia detail={detail} key={`${detail.title}-${i}`} />
        ))}
      </div>
    </CenteredColumn>
  )
}
