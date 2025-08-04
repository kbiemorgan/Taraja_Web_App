
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1404, hash: 'd4e9945bd3aac6eabb223bb775730832054b196fec53f91a12e2ff1d74292f3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '05fafb695e963a0b51f786ec77a82671280cf67bd370fad320149e3f56d80006', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TPEC7ZP6.css': {size: 18655, hash: '0cftg1zdCNA', text: () => import('./assets-chunks/styles-TPEC7ZP6_css.mjs').then(m => m.default)}
  },
};
