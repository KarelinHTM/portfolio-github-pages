<script lang="ts" setup>

</script>

<template>
	<section class='border-t' :class='{ "border-t-transparent md:pt-[120px] pt-[30px]": $route.path == "/about" }'>
		<div class="container my-grid ">
			<h3 class='col-span-5 xl:text-7xl lg:text-6xl text-5xl leading-[1.1] w-full mb-4'>Обо мне</h3>
			<div class='col-span-7 w-full'>
				<h6 class='font-medium text-accent-foreground text-2xl lg:text-[32px] mb-4 leading-snug'>
					Я frontend-разработчик из Челябинска.
				</h6>
				<p class='md:mb-10 mb-8'>
					Я frontend-разработчик из Челябинска, который ищет новый возможности. Получил образование по специальности
					"Разработчик веб и
					мультимедийных
					интерфейсов". Люблю делать акцент на доступности при разработке. Страстный и любопытный в решении проблем. В
					настоящее время я изучаю NuxtJS и дизайн. Мне
					нравится быть организатором в той сфере, в которой я нахожусь, а также играть в волейбол. Учитесь больше,
					чтобы улучшить навыки.
				</p>
				<UiButton v-if='$route.path !== "/about"' variant='link' size='xs' as-child>
					<NuxtLink to="/about">
						Подробнее
					</NuxtLink>
				</UiButton>
				<div v-if='$route.path !== "/"' class='flex items-center gap-4'>
					<UiButton size='lg' class='pr-0 pl-2'>
						Скачать резюме
						<Icon class='icon ml-2 mr-1 h-10 w-10 p-2 text-accent-foreground bg-background rounded-full' size='26px'
							name="solar:download-minimalistic-linear" />
					</UiButton>
					<SocialList />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.icon {
	color: #fff !important;
}
</style>