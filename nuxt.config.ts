export default defineNuxtConfig({
    devtools: false,
    head: {
        title: 'Karelin Stepan',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Привет, я Карелин Степан Frontend-разработчик из Челябинска, увлеченный созданием доступных и удобных для пользователя веб-сайтов.' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    modules: [
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
        '@vee-validate/nuxt',
        'nuxt-icon',
        ["nuxt-mail", {
            message: {
                to: 'karelin.developer@gmail.com',        
            },
            smtp: {
                service: 'gmail',
                auth: {
                    user: 'karelin.developer@gmail.com',
                    pass: 'zhoa cmff qtol hmsq',
                },
            },
        },]
    ],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui'
    },
    googleFonts: {
        families: {
            Manrope: {
                wght: '400..700',
            },
            'Oswald': {
                wght: '500',
            },
        }
    },
    pinia: {
        storesDirs: ['./stores/**'],
        },
    veeValidate: {
        autoImports: true,
    },
})