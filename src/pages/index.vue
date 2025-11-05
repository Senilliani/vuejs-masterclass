<template>
  <div>
    <h2>Home Page</h2>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page';

usePageStore().pageData.title = 'HOME Page'

</script>

<style scoped></style>
