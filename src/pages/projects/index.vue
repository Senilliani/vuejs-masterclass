<template>
  <DataTable v-if="projects" :columns="columns" :data="projects">
    <template #cell-name="{ cell }">
      <RouterLink :to="`/projects/${cell.row.original.slug}`">
        {{ cell.getValue() }}
      </RouterLink>
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import { mysupabase } from '@/lib/supabaseClient';
import type { Tables } from '../../../database/types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';

usePageStore().pageData.title = 'PROJECTS Page'


const projects = ref<Tables<'projects'>[] | null>();

const f = async () => {
  const { data, error } = await mysupabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data;

  console.log(projects.value)
  return data
}

await f()

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name')
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status')
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'collaborators')
  },
]

</script>

<style scoped></style>
