<script setup lang="ts">
useHead({
  title: 'Mi App',
  meta: [{ name: 'description', content: 'Descripción de la app' }],
});

// Functionality to listen to dark mode changes while app is running
watch(
  () => useDark(),
  (isDark) => {
    if (isDark.value) return document.documentElement.classList.toggle('dark', true);
    return document.documentElement.classList.remove('dark');
  }
);
</script>

<template>
  <div>
    <router-view />
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
