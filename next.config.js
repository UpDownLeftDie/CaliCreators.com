module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  distDir: 'docs',
  env: {
    ENV: process.env.NODE_ENV,
  },
};
