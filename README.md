[![Netlify Status](https://api.netlify.com/api/v1/badges/55c355a9-3735-425c-9aa8-06ca4e2f6a0b/deploy-status)](https://app.netlify.com/sites/vitesse-nuxt3-dkks/deploys)

# [Vitesse](https://github.com/antfu/vitesse) for Nuxt 3 By DKKs 👋🏻 

[🖥 DEMO 🖥](https://vitesse-nuxt3-dkks.netlify.app/)

Or try edit on ```Stackblitz```

<a href="https://stackblitz.com/github/mjkodkks/nuxt3-vitesse-dkks"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>

Or ```CodeSandbox```

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mjkodkks/nuxt3-vitesse-dkks)
</p>


## Features

- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR

- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed.

- 😃 Thousands of icons, one unified framework, powered by [iconify](https://iconify.design/)

- 🔥 The `<script setup>` syntax

- 🍍 [State Management via Pinia](https://pinia.esm.dev), see [./composables/user.ts](./composables/user.ts)

- 📑 [Layout system](./layouts)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript, of course

- 🩻 [Nuxt Devtools](https://devtools.nuxtjs.org/) ```npx nuxi@latest devtools enable``` 

- 📱 [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode) Use nuxt commands with a few clicks.

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode) An extension offering commands and tools to make your experience with Nuxt.js more pleasant.

## Dev tools
Improve your DX, finding bugs, tracking data flow and pinia
- [Vue Devtool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Nuxt Devtools](https://devtools.nuxtjs.org/) ```npx nuxi@latest devtools enable``` 

## Variations Original

- [vitesse](https://github.com/antfu/vitesse) - Opinionated Vite Starter Template
- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [vitesse-nuxt-bridge](https://github.com/antfu/vitesse-nuxt-bridge) - Vitesse for Nuxt 2 with Bridge
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mjkodkks/nuxt3-vitesse-dkks/generate).

```for original``` 
[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-nuxt3/generate).

## After fork this 

### Development
```
pnpm i
pnpm dev
```

### Deployment
For SSR
```
pnpm run build
```
For CSR or SSG

nuxt.config.ts
```
{
    ...,
    ssr: false,
    ...,
}
```
then 
```
pnpm run generate
```

### I don't like pnpm 😵
You can use npm or yarn to new package manager for this project 👍 . 

1) search all 'pnpm' keyword in project then remove all code and config.

2) try ```npm install && npm run dev``` or ```yarn install && yarn dev```
3) deploy for ssr ```npm run build``` or ```yarn build``` and for csr, ssg ```npm run generate``` or ```yarn generate```


### Update nuxt version by yourself
update package.json (pnpm example)
```
pnpm update nuxt
```
then
```
npx nuxi upgrade --force
```
** [Nuxt Version Here](https://github.com/nuxt/nuxt/releases)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit mjkodkks/nuxt3-vitesse-dkks my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
