<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import type { IProjectsItem } from '../Projects/projects.types'
import { useProjectsQuery } from '../Projects/useProjectsQuery'

interface ICardFormState {
	title: string
	description: string
	client?: string
	year: number
	role: string
	demoUrl?: string
	githubUrl?: string
	commercialUrl?: string
}

const { data, isSuccess } = useProjectsQuery()

const formSchema = toTypedSchema(z.object({
	name: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
	email: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').email('Не корректый email'),
	subject: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
	message: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(400, 'Максимум 400 символов'),
}))

const { handleSubmit, handleReset, setFieldValue, setValues, values } = useForm<ICardFormState>({
	validationSchema: formSchema,
})

const onSubmit = handleSubmit((value) => {
	handleReset()
})

watch(isSuccess, () => {
	const initialData = data.value as unknown as IProjectsItem
	console.log(initialData)
	setValues({
		title: initialData.title,
		description: initialData.description,
		client: initialData.client,
		year: initialData.year,
		role: initialData.role,
		demoUrl: initialData.demoUrl,
		githubUrl: initialData.githubUrl,
		commercialUrl: initialData.commercialUrl,
	})
})


</script>


<template>
	<section class='border-t'>
		<div class="container">
			<h5 class='text-accent-foreground text-4xl leading-none mb-4 mt-8'>Все проекты</h5>
			<div class="my-grid">
				<div class='col-span-3 text-sm' v-for='card in data'>
					<NuxtImg class='w-full rounded-[0.75rem] mb-6 mt-2' alt='' :src='card.imageUrl' />
					<form novalidate @submit='onSubmit' class='w-full'>
						<UiFormField v-slot="{ componentField }" name="title">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Название проекта</UiFormLabel>
								<UiFormControl>
									<UiInput type="text" class="rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="description">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Описание проекта</UiFormLabel>
								<UiFormControl>
									<UiTextarea type="email" class="rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="client">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Заказчик</UiFormLabel>
								<UiFormControl>
									<UiInput type="client" class="rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="year">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Год</UiFormLabel>
								<UiFormControl>
									<UiInput type="text" class="rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="role">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Роль</UiFormLabel>
								<UiFormControl>
									<UiInput class=" rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="demoUrl">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Ссылка на демо</UiFormLabel>
								<UiFormControl>
									<UiInput class=" rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="githubUrl">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Ссылка на github</UiFormLabel>
								<UiFormControl>
									<UiInput class=" rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiFormField v-slot="{ componentField }" name="commercialUrl">
							<UiFormItem class='mb-4 mt-2'>
								<UiFormLabel>Ссылка на сайт</UiFormLabel>
								<UiFormControl>
									<UiInput class="rounded text-sm px-2 py-2" v-bind='componentField' />
								</UiFormControl>
								<UiFormMessage />
							</UiFormItem>
						</UiFormField>
						<UiButton class='text-[12px]' type="submit">Обновить данные</UiButton>
					</form>
				</div>
			</div>

		</div>
	</section>
</template>
