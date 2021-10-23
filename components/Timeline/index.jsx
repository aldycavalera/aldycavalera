import { Coffee } from 'react-feather'
import { Year2021 } from './2021'
import { TimelineEntry } from './Entry'

export const Timeline = () => {
  return (
    <div className="flex flex-col w-full timeline-container">
      <Year2021 />
      <TimelineEntry
        title="Work in progress..."
        timestamp="More timeline entries coming soon"
        Icon={Coffee}
        divider={false}
      />
    </div>
  )
}
