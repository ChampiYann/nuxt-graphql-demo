module.exports = {
  apps: [
    {
      name: 'FrontEnd',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
