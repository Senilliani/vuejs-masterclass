<template>
  <div>
    <h2>Home Page</h2>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 3 } }">IR al proyecto 3</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped></style>
