const config =  {
    app: process.env.VUE_APP_NAME,
    api: process.env.VUE_APP_ROOT_API,
    contact: {
        email: process.env.VUE_APP_EMAIL,
        phone: process.env.VUE_APP_PHONE,
        skype: process.env.VUE_APP_SKYPE
    },
    panel: process.env.VUE_APP_PANEL
}

export default config