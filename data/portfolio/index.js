import ump21 from './ump21'
import puanindonesia from './puanindonesia'
import kingsejong from './kingsejong'
import ainihanifa from './ainihanifa'
import tndSummit from './tnd-summit'
import tndDatabase from './tnd-database'

const allPosts = [ainihanifa, kingsejong, puanindonesia, tndDatabase, tndSummit, ump21].sort()

function extractSummary({ title, slug, tint, details }) {
  return {
    title,
    slug,
    tint,
    firstDetail: details[0],
    detailsCount: details.length
  }
}

export const summaries = allPosts.map(extractSummary)

export default allPosts
