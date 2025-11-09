import { mysupabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = mysupabase.from('tasks').select(`
  *,
  projects (
  id,
  name,
  slug
  )
`)
export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = mysupabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuery>
