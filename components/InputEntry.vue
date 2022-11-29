<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text" autocomplete="off"
      outline="none active:none"
      class="px-4 py-2 mt-5 w-[250px] text-center bg-transparent border rounded-md dark:grey-[700] outline-none active:outline-none"
      @keydown.enter="go"
    >
    <div>
      <button
        :disabled="!name"
        class="m-8 text-sm rounded relative inline-flex group items-center justify-center px-3.5 py-2  cursor-pointer border-b-4 border-l-2
         active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-dodger-blue-500 to-purple-500 border-purple-700 text-white
         disabled:opacity-10 transition-opacity duration-500"
        @click="go"
      >
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10" />
        <span class="relative">Try to save this name</span>
      </button>
    </div>
  </div>
</template>
