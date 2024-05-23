export const useIsAuthStore = defineStore('isAuth', {
	state: () => ({
		isAuth: false
	}),
	actions: {
		set(data: boolean) {
			this.$patch({isAuth: data})
		}
	}
})