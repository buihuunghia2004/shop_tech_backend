const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.DINARY_CLOUD_NAME,
  api_key: process.env.DINARY_API_KEY,
  api_secret: process.env.DINARY_API_SECRET
});

module.exports = cloudinary