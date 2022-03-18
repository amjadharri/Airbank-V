const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: false,
    },
  },
});
