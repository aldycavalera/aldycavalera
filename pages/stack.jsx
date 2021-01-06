import { NextSeo } from 'next-seo'
import StackList from '../components/Stack'
import Page, { PageHeader } from '../components/Page'
import { CenteredColumn } from '../components/Layouts'
import Recommendations from '../components/Stack/Recommendations'

function Stack() {
  return (
    <Page>
      <NextSeo
        title={'Stack'}
        description={'My favorite tools and software.'}
        openGraph={{
          url: 'https://brianlovin.com/stack',
          title: 'Stack',
          description: 'My favorite tools and software.',
          images: [
            {
              url: 'https://brianlovin.com/static/meta/stack.png',
              alt: 'My favorite tools and software.',
            },
          ],
        }}
      />
      <CenteredColumn>
        <PageHeader title="Stack" subtitle="My favorite tools and software." />

        <StackList />
        <Recommendations />
      </CenteredColumn>
    </Page>
  )
}

export default Stack
