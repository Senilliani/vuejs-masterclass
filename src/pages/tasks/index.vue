<template>
  <div>
    <h2>Páginas de TAREAS</h2>
    <RouterLink to="/">Ir a la Home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { mysupabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>();

const f = async () => {
  const { data, error } = await mysupabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data;

  console.log(tasks.value)
  return data
}

f()

</script>

<style scoped></style>
