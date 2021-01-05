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
            subtitle="Thinking out loud about design, development, and building
              excellent software."
          />

          <OverthoughtSubscribeBox />
          {data && data.posts && <OverthoughtList posts={data.posts} />}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Overthought
