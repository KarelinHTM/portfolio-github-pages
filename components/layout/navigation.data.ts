export interface INavigationItem {
	name: string
	url: string
}

export const NAVIGATION_DATA: INavigationItem[] = [
	{
		name: "Главная",
		url: '/',
	},
	{
		name: "Обо мне",
		url: '/about',
	},
]