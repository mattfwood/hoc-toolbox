export const imports = {
  'src/components/Filter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-filter" */ 'src/components/Filter.mdx'),
  'src/components/If/If.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-if-if" */ 'src/components/If/If.mdx'),
}
