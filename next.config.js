module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  env: {
    ENV: process.env.NODE_ENV,
  },
};
