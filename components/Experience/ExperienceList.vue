<script lang="ts" setup>
import { useExperienceQuery } from './useExperienceQuery'
const { data } = useExperienceQuery()
</script>

<template>
	<div class='col-span-6 w-full flex flex-col lg:gap-20 gap-10'>
		<div v-for="item in data" :key="item.id">
			<div class='flex gap-y-0.5 gap-x-10 justify-between items-center xl:flex-nowrap flex-wrap'>
				<h6 class='lg:text-2xl text-lg text-accent-foreground font-medium whitespace-nowrap'>{{ item.title }}</h6>
				<span>{{ item.beginningOfWork }} — {{ item.endOfWork }}</span>
			</div>
			<div class='lg:mt-2 mt-0.5 text-secondary-foreground font-semibold  tracking-wider' v-if='item.job'>{{ item.job }}
			</div>
			<p class='lg:mt-4 mt-2'>{{ item.description }}</p>
		</div>
	</div>
</template>
