<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <svg v-if="color.value === 'dark'" class="animate-pulse" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M228.1 149.1a12 12 0 0 0-11.6-8.5a11.4 11.4 0 0 0-3.3.6a80 80 0 0 1-98.3-98.4a13.5 13.5 0 0 0 .4-2.8a12 12 0 0 0-7.5-11.8a12.6 12.6 0 0 0-7.9-.4A104 104 0 1 0 228.2 156a12.5 12.5 0 0 0-.1-6.9ZM128 208A80 80 0 0 1 88.1 58.6a104.2 104.2 0 0 0 109.3 109.3A80.4 80.4 0 0 1 128 208Z" /></svg>
    <svg v-else class="animate-pulse" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM248 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12Zm-35.1 67.9a12.2 12.2 0 0 1 0 17a12.4 12.4 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-5.7-5.7a12 12 0 0 1 17-17ZM140 228v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.4 12.4 0 0 1-8.5-3.5a12.2 12.2 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 0ZM40 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12Zm3.1-67.9a12 12 0 0 1 17-17l5.7 5.7a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z" /></svg>
  </button>
</template>
