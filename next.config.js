const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  env: {
    WP_API_ENDPOINT: 'https://public-api.wordpress.com/rest/v1.1/sites',
    WP_BLOG_NAME: 'xxthoughtsapi.wordpress.com',
    MAILCHIMP_LIST_ID: 'f0254a67e1',
    MAILCHIMP_API_KEY: '55fdf82d1a88f64f51d989ea8a514173-us7'
  },
  images: {
    domains: ['pbs.twimg.com']
  }
})
