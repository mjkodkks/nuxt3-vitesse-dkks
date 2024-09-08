<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template>
  <div>
    <h3 class="text-2xl">
      ✋ Hi,
    </h3>
    <div class="text-xl">
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <div class="text-sm">
        <span op-50>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <Counter />

    <div>
      <NuxtLink
        class="btn m-3 text-sm"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
