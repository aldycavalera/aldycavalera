const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken
})

const getList = async (req, res) => {
  const slug = req.url.split('/').pop()
  const entries = await client.getEntries({
    locale: '*',
    content_type: 'thoughts',
    'fields.slug[match]': slug
  })
  if (entries.items) {
    return res.json(entries)
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
  return res.status(400).json({
    error: true
  })
}

export default getList
