[![Netlify Status](https://api.netlify.com/api/v1/badges/55c355a9-3735-425c-9aa8-06ca4e2f6a0b/deploy-status)](https://app.netlify.com/sites/vitesse-nuxt3-dkks/deploys)

# [Vitesse](https://github.com/antfu/vitesse) for Nuxt 3 By DKKs 👋🏻

[🖥 DEMO 🖥](https://vitesse-nuxt3-dkks.netlify.app/)

#### ☁ Try in the Cloud
[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/mjkodkks/nuxt3-vitesse-dkks)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/mjkodkks/nuxt3-vitesse-dkks)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/embed/react-markdown-preview-co1mj?fontsize=14&hidenavigation=1&theme=dark)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mjkodkks/nuxt3-vitesse-dkks)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mjkodkks/nuxt3-vitesse-dkks?template=node&title=ngx-vcard%20Example)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/mjkodkks/nuxt3-vitesse-dkks)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/mjkodkks/nuxt3-vitesse-dkks)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/mjkodkks/nuxt3-vitesse-dkks)

## Features

- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR

- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed.

- 😃 Thousands of icons, one unified framework, powered by [iconify](https://iconify.design/)

- 🔥 The `<script setup>` syntax

- 🍍 [State Management via Pinia](https://pinia.esm.dev), see [./stores/user.ts](./stores/user.ts)

- 📑 [Layout system](./layouts)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript, of course

- 🩻 [Nuxt Devtools](https://devtools.nuxtjs.org/) ```npx nuxi@latest devtools enable```

- 📱 [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode) Use nuxt commands with a few clicks.

- 🌐 [i18n](https://vue-i18n.intlify.dev/guide/integrations/nuxt3) Internationalization for Nuxt Applications. see [./locales](./locales)

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to get the best experience (You might want to disable Vetur if you have it).
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
### Environment Variables and Multiple Environments.
For multiple environments can use ```.env``` and ```.env.prod``` or ```.env.whatever```

example :
1) create ```.env``` and ```.env.prod``` in root of project.

- .env
```env
WHAT_ENV="env_dev"
```

- .env.prod
```.env
WHAT_ENV="env_prod"
```

2) Add to ```nuxt.config.ts``` runtimeConfig -> public in this case will expose your env.
for private or secret please read https://nuxt.com/docs/guide/going-further/runtime-config
```sh
  ...,
  runtimeConfig: {
    public: {
      WHAT_ENV: process.env.WHAT_ENV || 'env_dev'
    }
  },
  ...
```

3) Use in project by composables.
```vue
<script setup lang="ts">
const config = useRuntimeConfig()
const whatEnv = config.public.WHAT_ENV
</script>

<template>
  <div> {{ whatEnv }} </div>
</template>
```

4) run this command.
```sh
pnpm run start:dev
## equal (=)
nuxi dev --dotenv .env

or

pnpm run start:prod
## equal (=)
nuxi dev --dotenv .env.prod
```

## Deployment

[full documentation](https://nuxt.com/docs/getting-started/deployment)

| Mode | (ssr) nuxt.config.ts | command       | multiple environment             |
|------|----------------------|---------------|----------------------------------|
| SSR  | true                 | pnpm build    | pnpm build --dotenv .env.prod    |
| SPA  | false                | pnpm generate | pnpm generate --dotenv .env.prod |
| SSG  | true                 | pnpm generate | pnpm generate --dotenv .env.prod |

### For SSR (server-side rendering)
```
pnpm build
```
### For SPA (single page application)

- nuxt.config.ts
```sh
{
    ... ,
    ssr: false,
    ... ,
}
```
then
```
pnpm generate
```

### For SSG (static site generation)

- nuxt.config.ts
```sh
{
    ... ,
    ssr: true,
    ... ,
}
```
then
```sh
pnpm generate
```
### Docker
If you use Docker for standalone server

I already create ```Dockerfile``` and ```docker-compose.yml``` for easy deployment in (SSR Mode)

SPA, SSG please comment ```pnpm run build``` and uncomment ```RUN pnpm run generate```

- Dockerfile
```sh
# build the project
# RUN pnpm run build
# for spa and ssg
RUN pnpm run generate
```

easy to use via run ```./deploy-prod.sh``` file (Linux or Mac OS). For windows ```./deploy-prod.bat```

or use inline command like this
```sh
docker-compose down && docker-compose up -d --build && docker image prune --force --filter "dangling=true"
```

### I don't like pnpm 😵
You can use npm or yarn to new package manager for this project 👍 .

1) search all 'pnpm' keyword in project then remove all code and config.

2) try ```npm install && npm run dev``` or ```yarn install && yarn dev```
3) deploy for ssr ```npm run build``` or ```yarn build``` and for csr, ssg ```npm run generate``` or ```yarn generate```

### Update nuxt version by yourself 📈
```sh
npx nuxi upgrade --force
```

if version can't change

Update ```package.json``` (pnpm example)
```sh
pnpm update nuxt
```
then
```sh
npx nuxi upgrade --force
```
for clean your lock file and node_modules.

** [Nuxt Version Here](https://github.com/nuxt/nuxt/releases)

latest version:
<a href="https://www.npmjs.com/package/nuxt"><img src="https://img.shields.io/npm/v/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="Version"></a>

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit mjkodkks/nuxt3-vitesse-dkks my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
