export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/Filter/Filter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-filter-filter" */ 'src/components/Filter/Filter.mdx'),
  'src/components/If/If.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-if-if" */ 'src/components/If/If.mdx'),
}
