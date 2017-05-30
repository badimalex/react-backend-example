module.exports = {
  apps: [
    {
      name: 'blog-platform',
      script: './initializers/server/index.js',
      env: {
        'NODE_ENV': 'development'
      },
      env_production: {
        'NODE_ENV': 'production'
      }
    }
  ]
};
