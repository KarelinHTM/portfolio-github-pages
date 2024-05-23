<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h6 :class="cn('font-medium leading-none text-accent-foreground text-2xl lg:text-[32px]', props.class)
    ">
    <slot />
  </h6>
</template>
