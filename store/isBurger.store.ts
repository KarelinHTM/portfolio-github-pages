export const useIsBurgerStore = defineStore('isBurger', {
	state: () => ({
		isBurger: false
	}),
	actions: {
		set(data: boolean) {
			this.$patch({isBurger: data})
		}
	}
})