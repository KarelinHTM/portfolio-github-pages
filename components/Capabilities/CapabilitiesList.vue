<script lang="ts" setup>
import { CAPABILITIES_DATA } from './capabilities.data'
</script>

<template>
	<div class='flex flex-wrap lg:gap-4 gap-3 items-center'>
		<span
			class='inline-block lg:py-5 py-4 lg:px-8 px-6 text-accent-foreground border rounded-[6.25rem] uppercase font-bold lg:text-base text-sm'
			v-for='capability in CAPABILITIES_DATA' :key="capability.name">
			{{ capability.name }}
		</span>
	</div>
</template>
