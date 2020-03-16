module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  env: {
    ENV: process.env.NODE_ENV
  }
};
