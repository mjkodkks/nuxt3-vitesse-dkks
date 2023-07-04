<script setup lang="ts">
const { data, pending } = await useFetch('/api/pageview')

const time = useTimeAgo(computed(() => data.value?.startAt || 0))
</script>

<template>
  <div>
    <div v-if="pending">loading...</div>
    <span v-if="data">{{ data.pageview }}</span>
    page views since
    <span>{{ time }}</span>
  </div>
</template>
