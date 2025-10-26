<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<script setup lang="ts">
import { mysupabase } from '@/lib/supabaseClient';
import { h, ref } from 'vue';
import type { Tables } from '../../../database/types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';


const projects = ref<Tables<'projects'>[] | null>();

const f = async () => {
  const { data, error } = await mysupabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data;

  console.log(projects.value)
  return data
}

f()

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('name'))
    }
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    }
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'collaborators'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, JSON.stringify(row.getValue('collaborators')))
    }
  },
]

</script>

<style scoped></style>
