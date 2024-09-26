module.exports = {
  apps: [
    {
      name: 'shoptech',   // Tên ứng dụng cho môi trường dev
      script: './server.js',      // Đường dẫn đến file chính của ứng dụng
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
    }
  ]
};
