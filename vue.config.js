const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Todo App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    manifestOptions: {
      name: "Todo App",
      short_name: "todo",
      start_url: ".",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4DBA87",
      description: "This is my Todo application",
      icons: [
        {
          src: "/img/icons/pwa.png",
          sizes: "200x200",
          type: "image/png"
        }
      ]
    }
  }
})
