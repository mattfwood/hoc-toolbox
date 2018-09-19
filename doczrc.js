import { css } from 'docz-plugin-css'

module.exports = {
  base: '/hoc-toolbox/',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true
    })
  ]
}
