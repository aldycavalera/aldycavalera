import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 p-6 py-24 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4">
          <Link href="/" as="/" passHref>
            <a className="black-link">Home</a>
          </Link>

          <Link href="/about" as="/about" passHref>
            <a className="black-link">About</a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/thoughts" as="/thoughts" passHref>
            <a className="black-link">Writing</a>
          </Link>
          <Link href="/works" as="/works" passHref>
            <a className="black-link">Works</a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">

          <Link href="/stack" as="/stack" passHref>
            <a className="black-link">My Stack</a>
          </Link>
        </div>
      </div>
    </CenteredColumn>
  )
}
