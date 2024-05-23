<script lang="ts" setup>
import { useWindowWidth } from '~/lib/useWindowWidth'
import { useIsBurgerStore } from '~/store/isBurger.store'
import { NAVIGATION_DATA } from './navigation.data'

const isBurgerStore = useIsBurgerStore()

const toggleMenu = () => {
	document.body.classList.toggle('overflow-hidden')
	isBurgerStore.set(!isBurgerStore.isBurger)
}

const screenWidth = useWindowWidth()

const dynamicClass = computed(() => {
	let translateValue = -screenWidth.value

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
		[`translate-x-${translateValue}`]: !isBurgerStore.isBurger,
	}
})
</script>


<template>
	<div @close="toggleMenu" class='bg-menu block md:hidden duration-500 relative ease-in-out' :class='dynamicClass'>
		<NuxtImg src="/logo.svg" alt="" width="146px" class='h-6 absolute left-6 top-9' />
		<nav class=' font-medium text-2xl flex flex-col gap-8'>
			<NuxtLink @click="toggleMenu" class=' whitespace-nowrap' v-for='item in NAVIGATION_DATA' :key="item.name"
				:to="item.url">{{
					item.name }}</NuxtLink>
		</nav>
	</div>
</template>

<style scoped>
.bg-menu {
	background-color: #1a1a1a;
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1000;
	overflow: hidden;
	padding: 130px 24px 0;
}

.translate-x-800 {
	transform: translateX(-800px) !important
}

.translate-x-700 {
	transform: translateX(-700px) !important
}

.translate-x-600 {
	transform: translateX(-600px) !important
}

.translate-x-500 {
	transform: translateX(-500px) !important
}

.translate-x-400 {
	transform: translateX(-400px) !important
}
</style>
