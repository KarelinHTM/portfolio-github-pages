<script lang="ts" setup>
import { useIsBurgerStore } from '~/store/isBurger.store'

const isBurgerStore = useIsBurgerStore()

const toggleMenu = () => {
	document.body.classList.toggle('overflow-hidden')
	isBurgerStore.set(!isBurgerStore.isBurger)
}
</script>

<template>
	<div class='absolute right-6 top-9 md:hidden'>
		<link href="./hamburgers.min.css" rel="stylesheet">
		<button size='icon' @click="toggleMenu" :class='{ "is-active": isBurgerStore.isBurger }'
			class="hamburger hamburger--collapse" type="button">
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
		</button>
	</div>
</template>

<style scoped>
.hamburger-inner::after,
.hamburger-inner::before,
.hamburger-inner {
	background-color: #d3e97a !important
}

.hamburger {
	padding: 0;
	position: relative;
	z-index: 1001;

}

.hamburger-box {
	width: 40px;
	height: 100%;
}

.hamburger--collapse .hamburger-inner {
	top: 70%;
	transform: translateY(100%);
}
</style>