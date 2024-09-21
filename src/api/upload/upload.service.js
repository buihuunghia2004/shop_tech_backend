const fs = require('fs')
const cloudinary = require('@configs/cloudinary')
const { ErrorRes } = require('@/core/error.res')
const { StatusCodes } = require('http-status-codes')
const uploadFile = async (file,folder) => {
  try {
    if (!file) throw new ErrorRes('Not found file', StatusCodes.NOT_FOUND)
    const result = await cloudinary.uploader.upload(file.path,{folder: 'shop_tech'+folder})
    //delete file
    fs.unlinkSync(file.path)
    return {
      public_id: result.public_id,
      url: result.secure_url
    }
  } catch (error) {
    if(error.status === StatusCodes.NOT_FOUND) throw error
    throw new Error('Upload failed')
  }
}

const uploadFiles = async (files,folder) => {
  try {
    // const imagesToUp = files.map(file => limit(() => uploadFile(file,folder)))
    if (files.length === 0) throw new ErrorRes('Not found files', StatusCodes.NOT_FOUND)
    const imagesToUp = files.map(file => uploadFile(file,folder))
    const result = await Promise.all(imagesToUp)
    return result
  } catch (error) {
    if(error.status === StatusCodes.NOT_FOUND) throw error
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