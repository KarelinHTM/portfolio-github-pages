<script lang="ts" setup>
import { account } from '~/lib/appwrite'
import { useIsAuthStore } from '~/store/isAuth.store'
import { useIsLoadingStore } from '~/store/isLoading.store'

useSeoMeta({
	title: 'Вход | Karelin Stepan'
})

const emailRef = ref('')
const passwordRef = ref('')

const isLoadingStore = useIsLoadingStore()
const isAuthStore = useIsAuthStore()
const router = useRouter()

const login = async () => {
	isLoadingStore.set(true)
	try {
		await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
		const response = await account.get()
		if (response) {
			isAuthStore.set(true)
			await router.push('/admin')
		}
	} catch (error) {
		console.error(error)
	} finally {
		emailRef.value = ''
		passwordRef.value = ''

		isLoadingStore.set(false)
	}
}
</script>


<template>
	<section class="mt-[15vh]">
		<div class='container my-grid'>
			<div class='col-start-4 col-span-6'>
				<h1 class='text-center text-accent-foreground text-6xl leading-none mb-8'>Войти</h1>
				<form action='get' class=''>
					<UiLabel for='email'>Email</UiLabel>
					<UiInput id='email' type="email" class="mb-6 mt-2 rounded" v-model="emailRef" />
					<UiLabel for='password'>Пароль</UiLabel>
					<UiInput id='password' type="password" class="mb-10 mt-2 rounded" v-model="passwordRef" />
					<div class="flex items-center justify-center">
						<UiButton size='lg' type="submit" @click="login">Войти</UiButton>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>
