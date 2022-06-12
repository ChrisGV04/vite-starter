<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-50">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <Transition
          appear
          mode="out-in"
          appear-active-class="transition-opacity duration-500"
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-150"
          enter-from-class="opacity-0"
          leave-from-class="opacity-100"
          enter-to-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </Transition>

        <template #fallback>
          <div class="flex min-h-screen items-center justify-center">Loading...</div>
        </template>
      </Suspense>
    </RouterView>
  </main>
</template>
