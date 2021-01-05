const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  images: {
    domains: ['pbs.twimg.com']
  }
})
