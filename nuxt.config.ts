import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: '/nuxt3-vitesse-dkks',
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  // // clear all routes for single file
  hooks: {
    'prerender:routes': ({ routes }) => {
      routes.clear()
    },
  },

  router: {
    options: {
      hashMode: true,
    },
  },

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // i18n support by nuxt module
    // comment if you don't want to use i18n.
    '@nuxtjs/i18n',
  ],

  colorMode: {
    classSuffix: '',
  },

  // i18n support
  // comment if you don't want to use i18n.
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'th',
        name: 'Thai',
        file: 'th.json',
      },
    ],
  },

  imports: {
    dirs: [
      // Scan top-level store modules
      'stores',
    ],
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
      include: ['./types/**/*.d.ts'],
    },
    shim: false,
  },

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      WHAT_ENV: process.env.WHAT_ENV || 'env_dev',
    },
  },

  compatibilityDate: '2024-09-08',
})
