const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@/components": path.resolve(__dirname, "src/components/"),
      "@/pages": path.resolve(__dirname, "src/pages/"),
      "@/assets": path.resolve(__dirname, "src/assets/"),
    },
  };

  return config;
};
