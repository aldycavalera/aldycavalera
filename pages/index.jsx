import Page, { PageHeader } from '../components/Page'
import { CenteredColumn } from '../components/Layouts'
import { Timeline } from '../components/Timeline'
import Link from 'next/link'

export default function Home() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 md:items-center">
            <PageHeader
              title="Hi, I’m Cavalera"
              subtitle="I’m a software developer, living in Sumedang, Indonesia. Currently build awesome web(s) with PT Sawala Inovasi Indonesia"
            />

            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <Link href="/about" passHref>
                <a>
                  <button className="w-full text-lg btn btn-primary btn-large">
                    More about me
                  </button>
                </a>
              </Link>
              <a
                href="https://facebook.com/cavalera.aldy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full text-lg btn btn-large">
                  Follow me on Facebook
                </button>
              </a>
            </div>
          </div>
          
          <Timeline />
        </div>
      </CenteredColumn>
    </Page>
  )
}
