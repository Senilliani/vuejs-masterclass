<script setup lang="ts">
import AuthLayout from './components/ui/Layout/main/AuthLayout.vue';
</script>

<template>
  <!-- quiero limpiar el app, que tenga todo otro componente -->
  <!-- para quienes estan logueados que vean el sidebar (ir a mis proyectos) pero los que no lo vean -->
  <AuthLayout>
    <RouterView />
  </AuthLayout>
</template>
