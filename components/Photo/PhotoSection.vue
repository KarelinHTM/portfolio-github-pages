<script lang="ts" setup>
</script>

<template>
	<section class='py-0 md:pb-10 pb-4'>
		<div class="container my-grid items-center">
			<NuxtImg :src='$route.path == "/about" ? "/about.jpg" : "/heroAbout.jpg"' alt='Фото frontend-разрботчика' preload
				class='object-cover rounded-[1rem] col-span-12 w-full min-h-[343px] hidden sm:block' />
			<NuxtImg :src='$route.path == "/about" ? "/aboutMobile.jpg" : "/heroAboutMobile.jpg"'
				alt='Фото frontend-разрботчика' preload class='object-cover rounded-[1rem] col-span-12 w-full sm:hidden' />
		</div>
	</section>
</template>