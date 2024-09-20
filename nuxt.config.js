// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: "/DigitalGroup-website/",
    pageTransition: 
    { 
      name: 'page', 
      mode: 'out-in' }
  },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    // '@pinia/nuxt',
    //'nuxt-security',
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt3-leaflet',
    '@nuxtjs/i18n',
    'nuxt-headlessui'
  ],
  nitro: {
    compressPublicAssets: true,
  },
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],
  // purgeCSS: {
  //   whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  // },
  runtimeConfig: {
    apiLocal: process.env.API_LOCAL_URL,
    public: {
      apiBase: process.env.API_URL,
      apiPrefix: '/api'
    }
  },
  headlessui: {
    prefix: 'Headless'
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      { 
        code: 'ar', 
        iso: 'ar-LY',
        file: 'ar-LY.json' 
      },
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_and_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' 
    }
  },

  image: {
    dir: 'public',
    format: ['webp']
  },
})
