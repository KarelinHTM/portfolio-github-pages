<script lang="ts" setup>
import { useIsAuthStore } from '~/store/isAuth.store'


useSeoMeta({
	title: 'Панель администратора | Karelin Stepan'
})

const isAuthStore = useIsAuthStore()
const router = useRouter()

onBeforeMount(() => {
	const isAuth = isAuthStore.$state.isAuth
	if (!isAuth) router.push('/')
})

</script>

<template>
	<div v-if='isAuthStore.$state.isAuth'>
		<!-- <ProjectsListAdmin /> -->
	</div>
</template>
