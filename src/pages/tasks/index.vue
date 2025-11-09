<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'TASKS Page'

const tasks = ref<TasksWithProjects | null>();

const f = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data;

  return data
}

await f()

</script>

<style scoped></style>
