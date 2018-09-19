export const imports = {
  'src/components/Filter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-filter" */ 'src/components/Filter.mdx'),
}
