'use strict'

module.exports = () => ({
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false,
      browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7']
    },
    cssnano: true
  }
})