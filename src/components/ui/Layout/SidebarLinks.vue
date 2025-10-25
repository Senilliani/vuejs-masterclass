<template>
  <!-- en lugar de repetir hace un for -->
  <RouterLink v-for="link in links" :key="link.title" :to="link.to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground">
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
//mi padre me ha dicho que voy a recibir esto
interface LinkProp {
  title: string,
  to: string,
  icon: string
}

//dentro del objeto todas las props
defineProps<{
  links: LinkProp[]
}>()

</script>

<style scoped></style>
