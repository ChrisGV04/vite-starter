<script setup lang="ts">
import { APP_NAME } from '~/env';
</script>

<template>
  <h1 class="text-2xl text-gray-900">Welcome to {{ APP_NAME }}!</h1>
</template>

<route lang="yaml">
name: home
</route>
