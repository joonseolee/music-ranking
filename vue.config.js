const Dotenv = require('dotenv-webpack')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: `config/.env.${process.env.NODE_ENV}`,
        safe: false,
        allowEmptyValues: false,
        systemvars: true,
        silent: true,
        defaults: false
      })
    ]
  }
}
