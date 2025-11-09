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
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { projectsQuery, type Projects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/projectsColumns';

usePageStore().pageData.title = 'PROJECTS Page'


const projects = ref<Projects | null>();

const f = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data;

  return data
}

await f()

</script>

<style scoped></style>
