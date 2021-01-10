import Image from 'next/image'
import Link from 'next/link'
import Page from '../components/Page'
import { CenteredColumn } from '../components/Layouts'
import ThoughLists from '../components/Thoughts/List'
import Divider from '../components/Divider'

export function About({ data, summaries }) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12" data-cy="about-page">
          <div className="-mx-4 -mt-24 md:mt-0 md:-mx-8 ">
            <Image
              src="/static/img/about.jpg"
              alt={'A photo of me'}
              layout="responsive"
              width="672"
              height="448"
              className="md:rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col prose lg:prose-lg">
              <p>
                👋 I’m a software developer, living in Sumedang, Indonesia.
              </p>
              <p>
                Right now I'm developing website at{' '}
                <a
                  href="https://sawa.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sawala Tech
                </a> .
              </p>
              <p>
                Sawala is my first ever job, started in March 2019, Sawala made me to became who i am today. Developed
                almost 10+ projects, with small to huge clients, I'm capable doing both technical and communications. 
                If you interested what i was developing for, you can find out{' '}
                <Link href="/works">Here</Link>.
              </p>
              <p>
                I also be the part of Sawala Redesign, a next version of Sawala Technology that comes with the new modern Stack: 
                NodeJS! It planned to be the first sawala ever product, and also the first Sawala open source products. Yet it all just
                a plan but there is nothing wrong with dreaming. Happy to be the part of Sawala Tech!
              </p>
              <p>
                You can find me on{' '}
                <a
                  href="https://facebook.com/cavalera.aldy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{' '}
                to contact or follow me personally, or on {' '}
                <a
                  href="https://github.com/brianlovin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                where I’m building in the open, or poke me on{' '}
                <a
                  href="mailto:personal.cavalera@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email
                </a>{' '}
                to talk about your awesome future website.
              </p>
            </div>

            <Divider />

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Writing</h4>

                <p className="text-lg">
                  List of thoughts that comes to my wild mind
                </p>
              </div>

              {data && data.posts && <ThoughLists posts={data.posts} />}

              <div className="flex flex-col space-y-1">
                <Link href="/overthought" as="/thoughts" passHref>
                  <a className="text-blue-600 dark:text-blue-500">
                    See all posts &rarr;
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Portfolio</h4>
                <p className="text-lg">Explore the website i was developing. It stacks, problems, challenges and many more.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <a href="https://ump21.jakarta.go.id" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">
                  UMP21 Jakarta
                </a>
                <p>Asymmetric Policy for Jakarta.</p>
              </div>
              <div />
              <div className="flex flex-col space-y-1">
                <Link href="/works" as="/works" passHref>
                  <a className="text-blue-600 dark:text-blue-500">
                    See all works &rarr;
                  </a>
                </Link>
              </div>
              <div />
            </div>

            <div className="flex flex-col space-y-4">
              <h4>Open source work</h4>
              <div className="flex flex-col space-y-1">
                <a
                  className="text-blue-600 dark:text-blue-500"
                  href="https://github.com/aldycavalera/s3-upload-files"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S3 Upload Files
                </a>
                <p>A simple module to upload your files to Amazon S3</p>
              </div>

              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/sawala-tech/sawala-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                >
                  Sawala Boilerplate
                </a>
                <p>Boilerplates for starting your dream project.</p>
              </div>
              <a
                href="https://github.com/aldycavalera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500"
              >
                Follow me on GitHub &rarr;
              </a>
            </div>

          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/thoughts`)
  const data = await res.json()
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      data,
    },
  }
}

export default About