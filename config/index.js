const config =  {
    app: process.env.NUXT_ENV_NAME,
    api: process.env.NUXT_ENV_ROOT_API,
    contact: {
        email: process.env.NUXT_ENV_EMAIL,
        phone: process.env.NUXT_ENV_PHONE,
        skype: process.env.NUXT_ENV_SKYPE
    },
    panel: process.env.NUXT_ENV_PANEL
}

export default config