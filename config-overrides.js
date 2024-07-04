const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@/components": path.resolve(__dirname, "src/components/"),
      "@/pages": path.resolve(__dirname, "src/pages/"),
      "@/assets": path.resolve(__dirname, "src/assets/"),
      "@/store": path.resolve(__dirname, "src/store/"),
      "@/utils": path.resolve(__dirname, "src/utils/"),
      "@/services": path.resolve(__dirname, "src/services/"),
    },
  };

  return config;
};
