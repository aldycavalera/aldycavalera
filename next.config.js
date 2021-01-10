const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  env: {
    MAILCHIMP_LIST_ID: 'f0254a67e1',
    MAILCHIMP_API_KEY: '55fdf82d1a88f64f51d989ea8a514173-us7',
    API_URL: 'https://api-aldycavalera.vercel.app',
    // API_URL: 'http://aldycavalera.vercel.app',
    DEFAULT_LOCALE: 'id-ID'
  },
  images: {
    domains: ['pbs.twimg.com']
  }
})
