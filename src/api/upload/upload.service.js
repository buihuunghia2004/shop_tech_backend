const fs = require('fs')
const cloudinary = require('@configs/cloudinary')
const uploadFile = async (file,folder) => {
  try {
    const result = await cloudinary.uploader.upload(file.path,{folder: 'shop_tech'+folder})
    //delete file
    fs.unlinkSync(file.path)
    return {
      public_id: result.public_id,
      url: result.secure_url
    }
  } catch (error) {
    console.log(error);
    throw new Error('Upload failed')
  }
}

const uploadFiles = async (files,folder) => {
  try {
    // const imagesToUp = files.map(file => limit(() => uploadFile(file,folder)))
    const imagesToUp = files.map(file => uploadFile(file,folder))
    const result = await Promise.all(imagesToUp)
    return result
  } catch (error) {
    throw new Error('Upload failed')
  }
}

const destroyFile = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id)
    return result
  } catch (error) {
    throw new Error('Delete failed')
  }
}

module.exports = {
  uploadFile,
  destroyFile,
  uploadFiles
}