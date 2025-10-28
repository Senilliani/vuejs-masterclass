<template>
  <div>
    <h2>Proyecto {{ route.params?.slug }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped></style>
