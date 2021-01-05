import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page, { PageHeader } from '../../components/Page'
import DesignDetailsGrid from '../../components/DesignDetailsGrid'
import { summaries } from '../../data/appDissections'
import { CenteredColumn } from '../../components/Layouts'

export default function DesignDetails() {
  return (
    <Page>
      <NextSeo
        title={'Portfolio'}
        description={'Portfolio list and its challenges.'}
        openGraph={{
          url: 'https://aldycavalera.com/works',
          title: 'Portfolio',
          description: 'Portfolio list and its challenges.',
          site_name: 'Portfolio',
          images: [
            {
              url: 'https://aldycavalera.com/static/meta/app-dissection.png',
              alt: 'Portfolio',
            },
          ],
        }}
      />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <PageHeader
            title="Portfolio"
            subtitle="Explore the website i was developing. It stacks, problems, challenges and many more."
          />

          <DesignDetailsGrid summaries={summaries} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
