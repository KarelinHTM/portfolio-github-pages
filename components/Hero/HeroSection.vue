<script lang="ts" setup>

</script>

<template>
	<section class='pt-[30px]'>
		<div class="container my-grid items-center">
			<div class='md:col-span-6 col-span-4 flex items-center md:mb-0 mb-16'>
				<div>
					<h1 class='xl:text-7xl xl:leading-tight lg:text-6xl lg:leading-tight text-5xl leading-tight md:mb-4 mb-3'>
						Привет, я
						<br /> Карелин
						Степан
					</h1>
					<p class='md:mb-10 mb-9'>
						Frontend-разработчик из Челябинска, увлеченный созданием доступных и удобных для пользователя веб-сайтов.
					</p>
					<div class='flex items-center gap-4'>
						<UiButton size='lg' class='pr-0 pl-2' as-child>
							<NuxtLink to='/#contacts'>
								Контакты
								<Icon class='icon ml-2 mr-1 h-10 w-10 p-2 text-accent-foreground bg-background rounded-full' size='26px'
									name="solar:arrow-right-up-linear" />
							</NuxtLink>
						</UiButton>
						<SocialList />
					</div>
				</div>
			</div>
			<NuxtImg src='/hero.jpg' alt='Фото frontend-разрботчика' preload
				class='rounded-[1rem] md:col-span-6 col-span-4 w-full' />
		</div>
	</section>
</template>

<style scoped>
.icon {
	color: #fff !important;
}
</style>
