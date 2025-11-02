<script setup lang="ts">
import AuthLayout from './components/ui/Layout/main/AuthLayout.vue';
</script>

<template>
  <!-- quiero limpiar el app, que tenga todo otro componente -->
  <!-- para quienes estan logueados que vean el sidebar (ir a mis proyectos) pero los que no lo vean -->
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" timeout="0">
        <Component v-if="Component" :is="Component" :key="route.name">Hello dentro del component</Component>
        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
