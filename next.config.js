const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  env: {
    WP_API_ENDPOINT: 'https://public-api.wordpress.com/rest/v1.1/sites',
    WP_BLOG_NAME: 'xxthoughtsapi.wordpress.com'
  },
  images: {
    domains: ['pbs.twimg.com']
  }
})
