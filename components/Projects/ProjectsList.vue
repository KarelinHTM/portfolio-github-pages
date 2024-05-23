<script lang="ts" setup>
import { useProjectsQuery } from './useProjectsQuery'

const { data } = useProjectsQuery()

</script>

<template>
	<div class='md:col-span-12 col-span-4 flex flex-col md:gap-28 gap-16'>
		<UiCard class='my-grid' v-for='card in data'>
			<div class='md:col-span-6 col-span-4 flex items-center justify-center py-16 px-9 bg-secondary rounded-[0.75rem]'>
				<NuxtImg class='w-full rounded-[0.75rem]' alt='' :src='card.imageUrl' />
			</div>
			<div class='md:col-span-6 col-span-4 lg:py-24 md:py-16 py-10 md:pl-7'>
				<UiCardHeader>
					<UiCardTitle>{{ card.title }}</UiCardTitle>
					<UiCardDescription>{{ card.description }}</UiCardDescription>
				</UiCardHeader>
				<UiCardContent>
					<div class='font-medium text-accent-foreground uppercase pb-4	border-b'>Информация о проекте</div>
					<div v-if='card.client' class='flex justify-between font-semibold py-4 border-b'>
						<span class='text-accent-foreground'>Заказчик</span>
						<span>{{ card.client }}</span>
					</div>
					<div class='flex justify-between font-semibold py-4	border-b'>
						<span class='text-accent-foreground'>Год</span>
						<span>{{ card.year }}</span>
					</div>
					<div class='flex justify-between font-semibold py-4	border-b'>
						<span class='text-accent-foreground'>Роль</span>
						<span>{{ card.role }}</span>
					</div>
				</UiCardContent>
				<UiCardFooter class='flex-wrap'>
					<UiButton v-if='card.demoUrl' variant='link' size='xs' as-child>
						<a :href="card.demoUrl" target="_blank" rel="noopener noreferrer">
							Демо
							<Icon size='24px' class='ml-1' name="solar:arrow-right-up-linear" />
						</a>
					</UiButton>
					<UiButton v-if='card.githubUrl' variant='link' size='xs' as-child>
						<a :href="card.githubUrl" target="_blank" rel="noopener noreferrer">
							GITHUB
							<Icon size='24px' class='ml-1' name="bxl:github" />
						</a>
					</UiButton>
					<UiButton v-if='card.commercialUrl' variant='link' size='xs' as-child>
						<a :href="card.commercialUrl" target="_blank" rel="noopener noreferrer">
							Посмотреть проект
							<Icon size='24px' class='ml-1' name="solar:arrow-right-up-linear" />
						</a>
					</UiButton>
				</UiCardFooter>
			</div>
		</UiCard>
	</div>
</template>
