module.exports = {
  app: process.env.VUE_APP_NAME,
  slogan: process.env.VUE_APP_SLOGAN,
  contact: {
    email: process.env.VUE_APP_EMAIL,
    phone: process.env.VUE_APP_PHONE,
    skype: process.env.VUE_APP_SKYPE
  },
  apikey: process.env.VUE_APP_APIKEY,
  firebase: process.env.VUE_APP_DATABASE_URL,
  api: process.env.VUE_APP_ROOT_API,
  panel: process.env.VUE_APP_PANEL
}
