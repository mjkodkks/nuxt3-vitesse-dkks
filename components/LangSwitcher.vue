<script lang="ts" setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="th">th</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>

<style scoped></style>
