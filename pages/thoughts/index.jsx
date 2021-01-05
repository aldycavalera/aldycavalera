import * as React from 'react'
import Page, { PageHeader } from '../../components/Page'
import OverthoughtSubscribeBox from '../../components/Thoughts/Subscribe'
import SEO from '../../components/Thoughts/SEO'
import OverthoughtList from '../../components/Thoughts/List'
import { CenteredColumn } from '../../components/Layouts'

function Overthought({ data }) {
  return (
    <Page data-cy="overthought">
      <SEO />

      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader
            title="Overthought"
            subtitle="List of thoughts that comes to my wild mind"
          />

          <OverthoughtSubscribeBox />
          {data && data.posts && <OverthoughtList posts={data.posts} />}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/xxthoughtsapi.wordpress.com/posts`)
  const data = await res.json()
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      data,
    },
  }
}
export default Overthought
