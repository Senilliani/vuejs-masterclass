<script setup lang="ts">
import Sidebar from '../Sidebar.vue';
import TopNavbar from '../TopNavbar.vue';

</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">Page title</h1>
      </div>
      <!-- <RouterView /> esto es la parte que está debajo del page title reemplazo por slot aquí porque este lo sigue teniendo el padre-->
      <slot></slot>
    </main>
  </div>
</template>
