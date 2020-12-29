export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Environments
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_CPA_ACCESS_TOKEN: process.env.CTF_CPA_ACCESS_TOKEN,
    CTF_CPA_HOST: process.env.CTF_HOST,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-contentful-prev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: '@/assets/css/main.scss',
      lang: 'scss',
    },
  ],

  styleResources: {
    // 指定したSCSSファイルをvueファイル内のstyleタグの中で有効とする
    scss: [
      '@/assets/css/foundation/_variables.scss',
      '@/assets/css/foundation/_functions.scss',
      '@/assets/css/foundation/_keyframes.scss',
      '@/assets/css/foundation/_mixin-utils.scss',
      '@/assets/css/foundation/_variables-easings.scss',
    ],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['plugins/contentful', 'plugins/functions', 'plugins/convIso'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
  ],
  dateFns: {
    methods: ['parseISO', 'toDate', 'format', 'isWithinInterval'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    ['vue-scrollto/nuxt', { duration: 900 }],
    'nuxt-webfontloader',
    'nuxt-clipboard2',
    '@nuxtjs/redirect-module',
  ],
  webfontloader: {
    google: {
      families: ['Roboto:400,700'],
    },
  },
  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301,
    },
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
