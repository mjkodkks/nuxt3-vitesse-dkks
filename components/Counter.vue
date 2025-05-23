<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="btn p-2 bg-slate-700 dark:bg-white text-white dark:text-black rounded-full cursor-pointer" @click="dec()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 11H5v2h14z" />
      </svg>
    </button>
    <div class="font-mono w-15 mx-auto inline-block">
      {{ count }}
    </div>
    <button class="btn p-2 bg-slate-700 dark:bg-white text-white dark:text-black rounded-full cursor-pointer" @click="inc()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
      </svg>
    </button>
  </div>
</template>
