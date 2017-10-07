// import $ from 'jquery'
// import utils from './calc'
// import cleanurl from './cleanurl'

/* Highlight JS Language loader */
import hljs from 'highlight.js/lib/highlight'
['javascript', 'css', 'bash'].forEach((langName) => {
  // Using require() here because import() support hasn't landed in Webpack yet
  const langModule = require(`highlight.js/lib/languages/${langName}`)
  hljs.registerLanguage(langName, langModule)
})

/* Example jQuery Loader */
// $('h1').text('Puddletown UI Bootstrap 👢')
hljs.initHighlightingOnLoad()
