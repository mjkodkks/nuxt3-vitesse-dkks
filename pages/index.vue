<script setup lang="ts">
const config = useRuntimeConfig()
const whatEnv = config.public.WHAT_ENV
</script>

<template>
  <div>
    <Logos class="mb-2" />
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="text-2xl">
          <span class="animate-pulse">Loading... </span>
        </div>
      </template>
    </Suspense>
    <LangSwitcher />
    <div class="flex justify-center">
      <ul
        class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]"
      >
        <li class="text-left">
          tailwindcss v3.4.1
        </li>
        <li class="text-left">
          nuxt v3.11.1
        </li>
        <li v-if="whatEnv">
          what env : <span class="text-green-400">{{ whatEnv }}</span>
        </li>
        <!-- ... -->
      </ul>
    </div>
    <InputEntry />
  </div>
</template>
