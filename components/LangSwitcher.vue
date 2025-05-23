<script lang="ts" setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale" class="outline-1 text-black bg-white dark:bg-gray-400 dark:text-white">
        <option value="en">
          en
        </option>
        <option value="th">
          th
        </option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>

<style scoped></style>
