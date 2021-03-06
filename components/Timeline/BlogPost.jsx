import * as React from 'react'
import Link from 'next/link'
import { TimelineEntry } from './Entry'
import { Edit2 } from 'react-feather'
import Image from 'next/image'

export function BlogPost({
  slug,
  title,
  description,
  timestamp,
  divider = true,
  image,
}) {
  return (
    <TimelineEntry
      title="Published new post"
      tint="green"
      Icon={Edit2}
      timestamp={timestamp}
      divider={divider}
    >
      <Link passHref href={`/overthought/${slug}`}>
        <a className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              {image && (
                <div className="mb-3 -mt-3 -ml-4 -mr-4 overflow-hidden border-b border-gray-100 dark:border-gray-900 rounded-t-md">
                  <Image
                    src={`/static/img/overthought/${image}`}
                    width={1012}
                    height={506}
                    layout="responsive"
                  />
                </div>
              )}
              <p className="font-semibold">{title}</p>
              <p className="font-normal text-tertiary">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </TimelineEntry>
  )
}
