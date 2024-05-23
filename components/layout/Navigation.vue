<script lang="ts" setup>
import { account } from '~/lib/appwrite'
import { useIsAuthStore } from '~/store/isAuth.store'
import { useIsLoadingStore } from '~/store/isLoading.store'
import { NAVIGATION_DATA } from './navigation.data'

const isLoadingStore = useIsLoadingStore()
const isAuthStore = useIsAuthStore()
const router = useRouter()

const logout = async () => {
	isLoadingStore.set(true)
	await account.deleteSession('current')
	isAuthStore.set(false)
	await router.push('/')
	isLoadingStore.set(false)
}
</script>

<template>
	<nav class='font-medium md:flex gap-8 ml-8 items-center hidden'>
		<NuxtLink class='whitespace-nowrap' v-for='item in NAVIGATION_DATA' :key="item.name" :to="item.url">{{
			item.name }}</NuxtLink>
		<NuxtLink v-if='isAuthStore.$state.isAuth' to='/admin'>Настройки</NuxtLink>
		<UiButton v-if='isAuthStore.$state.isAuth' @click='logout'>Выйти</UiButton>
	</nav>
</template>
