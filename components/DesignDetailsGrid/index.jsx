import * as React from 'react'
import DesignDetailsCard from '../DesignDetailsCard'

export default function DesignDetailsGrid({ summaries }) {
  return (
    <div className="flex flex-col space-y-4">
      {summaries.map((summary) => (
        <DesignDetailsCard key={summary.slug} summary={summary} />
      ))}
    </div>
  )
}
