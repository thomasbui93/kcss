const fs = require('fs')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const cssnano = require('cssnano')
const util = require('postcss-utilities')
const flexbug = require('postcss-flexbugs-fixes')

fs.readFile('./scss/index.scss', (err, css) => {
    postcss([
        precss({
            import: {
                extension: 'scss'
            }
        }),
        autoprefixer, 
        util(),
        flexbug,
        cssnano({
            preset: 'default',
        })
    ])
    .process(css, 
        { 
            from: './scss/index.scss',
            to: './css/k.css',
            map: { inline: false }
        }
    )
    .then(result => {
        fs.writeFile('./css/k.css', result.css, () => true)
        if ( result.map ) {
          fs.writeFile('./css/k.css.map', result.map, () => true)
        }
    })
    .catch(err => {
        console.log(err)
    }) 
})