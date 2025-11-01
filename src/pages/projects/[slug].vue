<template>
  <div>
    <h2>Proyecto {{ route.params?.slug }}</h2>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>

<style scoped></style>
