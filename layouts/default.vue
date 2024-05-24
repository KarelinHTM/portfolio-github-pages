<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { useWindowWidth } from '~/lib/useWindowWidth'
import { useIsAuthStore } from '~/store/isAuth.store'
import { useIsBurgerStore } from '~/store/isBurger.store'
import { useIsLoadingStore } from '~/store/isLoading.store'

const isBurgerStore = useIsBurgerStore()
const isLoadingStore = useIsLoadingStore()
const isAuthStore = useIsAuthStore()

const screenWidth = ref(process.client ? useWindowWidth() : 800)

const dynamicClass = computed(() => {
	let translateValue = screenWidth.value

	if (screenWidth.value < 400) {
		translateValue = 400
	} else if (screenWidth.value < 500) {
		translateValue = 500
	} else if (screenWidth.value < 600) {
		translateValue = 600
	} else if (screenWidth.value < 700) {
		translateValue = 700
	} else if (screenWidth.value < 800) {
		translateValue = 800
	}

	return {
		'translate-x-0': !isBurgerStore.isBurger,
		[`translate-x-${translateValue}`]: isBurgerStore.isBurger,
	}
})

onMounted(async () => {
	// try {
	// 	const isAuth = await account.get()
	// 	isAuth.status ? isAuthStore.set(true) : null
	// } catch (e) {
	// } finally {
	isLoadingStore.set(false)
	// }
})

</script>

<template>
	<div>
		<LayoutLoader v-if="isLoadingStore.isLoading" />
		<div class='overflow-hidden' v-else>
			<div class='ease-in-out duration-500' :class="dynamicClass">
				<LayoutHeader />
				<main>
					<slot />
				</main>
				<LayoutFooter v-if='$route.path !== "/login" && $route.path !== "/admin"' />
			</div>
			<LayoutBurgerButton />
			<LayoutBurgerNavigation />
		</div>
		<SpeedInsights />
	</div>

</template>

<style scoped>
.translate-x-800 {
	transform: translateX(800px)
}

.translate-x-700 {
	transform: translateX(700px)
}

.translate-x-600 {
	transform: translateX(600px)
}

.translate-x-500 {
	transform: translateX(500px)
}

.translate-x-400 {
	transform: translateX(400px)
}
</style>
