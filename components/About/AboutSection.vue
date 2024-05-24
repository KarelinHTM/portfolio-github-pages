<script lang="ts" setup>

</script>

<template>
	<section class='border-t' :class='{ "border-t-transparent md:pt-[120px] pt-[30px]": $route.path == "/about" }'>
		<div class="container my-grid ">
			<h3 class='col-span-5 xl:text-7xl lg:text-6xl text-5xl leading-[1.1] w-full mb-4'>Обо мне</h3>
			<div class='col-span-7 w-full'>
				<h6 class='font-medium text-accent-foreground text-2xl lg:text-[32px] mb-4 leading-snug'>
					Frontend-разработчик из Челябинска
				</h6>
				<p class='md:mb-10 mb-8'>
					Привет! Я frontend-разработчик из Челябинска, страстно ищущий новые возможности. Обладаю образованием по
					специальности "Разработчик веб и мультимедийных приложений". В своей работе уделяю особое внимание
					доступности, стремясь сделать веб-приложения удобными для всех пользователей.

					Я увлечен решением сложных задач и всегда стремлюсь учиться новому. В данный момент углубляюсь в изучение
					NuxtJS и дизайна. Люблю брать на себя роль организатора и активно участвовать в жизни своей команды. В
					свободное время играю в волейбол.

					Считаю, что непрерывное обучение — ключ к улучшению навыков и достижению профессионального роста.
				</p>
				<UiButton v-if='$route.path !== "/about"' variant='link' size='xs' as-child>
					<NuxtLink to="/about">
						Подробнее
					</NuxtLink>
				</UiButton>
				<div v-if='$route.path !== "/"' class='flex items-center gap-4'>
					<!-- !Дополнить резюме -->
					<!-- <UiButton size='lg' class='pr-0 pl-2'>
						Скачать резюме
						<Icon class='icon ml-2 mr-1 h-10 w-10 p-2 text-accent-foreground bg-background rounded-full' size='26px'
							name="solar:download-minimalistic-linear" />
					</UiButton> -->
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