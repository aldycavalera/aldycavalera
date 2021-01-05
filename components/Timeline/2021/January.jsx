import { useState } from 'react'
import Link from 'next/link'
import { Zap } from 'react-feather'
import { DateEntry, TimelineEntry, Notes, ButtonSet } from '../Entry'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function January() {
  const [spread, setSpread] = useState('Spread the words !');
  const onCopy = () => {
    setSpread('Link Copied !');
    setTimeout(() => {
      setSpread('Spread the words !')
    }, 3000);
  }
  return (
    <>
      <DateEntry title="January, 2021" />

      <TimelineEntry
        title="Website Published"
        timestamp="January 5, 2021"
        tint={'purple'}
        Icon={Zap}
      >
        <>
          <Notes>
            <p>
              New year, new website. Hopefully it continue and keep the good work! Thanks to Brian Lovin to make it happened 🍻
            </p>
          </Notes>
          <ButtonSet>
            <CopyToClipboard text="https://aldycavalera.com" onCopy={()=> onCopy()}>
              <a className="cursor-pointer btn">{spread}</a>
            </CopyToClipboard>
          </ButtonSet>
        </>
      </TimelineEntry>
    </>
  )
}
