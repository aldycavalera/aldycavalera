import ump21 from './ump21'
const allPosts = [ump21].reverse()

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
