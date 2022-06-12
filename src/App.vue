<script setup lang="ts">
import { APP_NAME } from '~/env';

useHead({
  title: APP_NAME,
  meta: [{ name: 'description', content: 'Descripción de la app' }],
});
</script>

<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <Transition
          appear
          mode="out-in"
          appear-active-class="transition-opacity duration-150"
          enter-active-class="transition-opacity duration-150"
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
  </div>
</template>

<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  @apply fixed top-0 left-0 z-50 h-0.5 w-full bg-sky-600 opacity-75 dark:bg-sky-500;
}
</style>
