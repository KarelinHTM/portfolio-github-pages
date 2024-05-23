import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_EXPERIENCE, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import type { IExperienceItem } from './experience.types'

export function useExperienceQuery() {
	return useQuery({
		queryKey: ['experience'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_EXPERIENCE),
		select(data) {
			const response = data.documents as unknown as IExperienceItem[]
			const experience = response.reverse()
			
			return experience
		}
	})
}