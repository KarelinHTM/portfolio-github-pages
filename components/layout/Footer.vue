<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

interface IContactFormState {
	name: string
	email: string
	subject: string
	message: string
}

const mail = useMail()
const sendMessage = (value: IContactFormState) => {
	mail.send({
		from: `${value.name} - ${value.email} <karelin.developer@gmail.com>`,
		subject: `${value.subject} | Связь с сайта-портфолио`,
		sender: `${value.email}`,
		replyTo: `${value.email}`,
		html: `<h3>${value.subject}</h3><p>${value.message}</p>`,
	})
}

const formSchema = toTypedSchema(z.object({
	name: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
	email: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').email('Не корректый email'),
	subject: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
	message: z.string({ message: 'Не корректные данные' }).min(2, 'Минимум 2 символа').max(400, 'Максимум 400 символов'),
}))

const { handleSubmit, handleReset } = useForm<IContactFormState>({
	validationSchema: formSchema,
})

const onSubmit = handleSubmit((value) => {
	sendMessage(value)
	handleReset()
})
</script>

<template>
	<footer id='contacts' class='md:py-20 py-16 pb-0 border-t'>
		<div class="container my-grid ">
			<div class='flex flex-col md:col-span-6 col-span-4 md:mb-0 mb-8'>
				<div>
					<h3
						class='text-accent-foreground lg:text-7xl lg:leading-tight md:text-5xl md:leading-tight text-[42px] leading-tight md:mb-6 mb-3'>
						Связаться со
						мной
					</h3>
					<p class='md:mb-10 mb-8'>
						Напиши на почту
						<a href="mailto:karelin.developer@gmail.com" target="_blank" rel="noopener noreferrer"
							class='text-accent-foreground border-b border-primary hover:text-secondary-foreground transition-colors'>karelin.developer@gmail.com</a>
					</p>
					<!-- <p class='mb-1'>
						Напиши на почту
						<a href="mailto:karelin.developer@gmail.com" target="_blank" rel="noopener noreferrer"
							class='text-accent-foreground border-b border-primary hover:text-secondary-foreground transition-colors'>karelin.developer@gmail.com</a>
					</p> -->
					<!-- !Дополнить резюме -->
					<!-- <p class='md:mb-10 mb-8'>
						Дополнительная информация в моём
						<a href="" target="_blank" rel="noopener noreferrer"
							class='text-accent-foreground border-b border-primary hover:text-secondary-foreground transition-colors'>резюме</a>
					</p> -->
					<SocialList />
				</div>
				<a href="https://t.me/karelindeveloper" target="_blank" rel="noopener noreferrer"
					class='mt-auto md:block hidden'>© 2024 Карелин Степан</a>
			</div>
			<form novalidate @submit='onSubmit' class='w-full md:col-span-6 col-span-4 md:m-0 mb-[30px]'>
				<UiFormField v-slot="{ componentField }" name="name">
					<UiFormItem class='mb-6'>
						<UiFormLabel>Имя</UiFormLabel>
						<UiFormControl>
							<UiInput type="text" class="rounded" v-bind='componentField' />
						</UiFormControl>
						<UiFormMessage />
					</UiFormItem>
				</UiFormField>
				<UiFormField v-slot="{ componentField }" name="email">
					<UiFormItem class='mb-6'>
						<UiFormLabel>Email</UiFormLabel>
						<UiFormControl>
							<UiInput type="email" class="rounded" v-bind='componentField' />
						</UiFormControl>
						<UiFormMessage />
					</UiFormItem>
				</UiFormField>
				<UiFormField v-slot="{ componentField }" name="subject">
					<UiFormItem class='mb-6'>
						<UiFormLabel>Тематика</UiFormLabel>
						<UiFormControl>
							<UiInput type="text" class="rounded" v-bind='componentField' />
						</UiFormControl>
						<UiFormMessage />
					</UiFormItem>
				</UiFormField>
				<UiFormField v-slot="{ componentField }" name="message">
					<UiFormItem class='md:mb-10 mb-8'>
						<UiFormLabel>Описание</UiFormLabel>
						<UiFormControl>
							<UiTextarea class=" rounded" v-bind='componentField' />
						</UiFormControl>
						<UiFormMessage />
					</UiFormItem>
				</UiFormField>
				<UiButton size='lg' type="submit">Отправить</UiButton>
			</form>
			<a href="https://t.me/karelindeveloper" target="_blank" rel="noopener noreferrer"
				class='mt-auto md:hidden col-span-4 block py-6 md:py-0 text-center'>© 2024
				Карелин Степан</a>
		</div>
	</footer>
</template>
