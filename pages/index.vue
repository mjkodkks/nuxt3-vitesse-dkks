<template>
  <div>
    <Logos class="mb-2" />
    <div class="block">
      <NuxtLink to="/dkks">
        DKKs page
      </NuxtLink>
    </div>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
