import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_PROJECTS, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import type { IProjectsItem } from './projects.types'

export function useProjectsQuery() {
	return useQuery({
		queryKey: ['projects'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_PROJECTS),
		select(data) {
			const projects = data.documents as unknown as IProjectsItem[]
			return projects
		}
	})
}