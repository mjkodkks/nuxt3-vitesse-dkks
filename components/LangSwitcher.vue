<script lang="ts" setup>
import { ClientOnly } from '#components'

const { locale, locales, setLocale } = useI18n()

function changeLocale() {
  setLocale(locale.value)
}
</script>

<template>
  <ClientOnly>
    <div class="flex justify-center items-center">
      <div class="w-1/2">
        <form>
          <select v-model="locale" class="outline-1 text-black bg-white dark:bg-gray-400 dark:text-white" @change="changeLocale">
            <option v-for="loc in locales" :key="loc.code" :value="loc.code">
              {{ loc.name }} - {{ loc.code }}
            </option>
          </select>
          <p>{{ $t('welcome') }}</p>
        </form>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
