<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl">
      <div class="inline-block i-carbon-warning" />
    </div>
    <div>Not found</div>
    <div>
      <button class="mt-8 mx-3 text-sm btn" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
