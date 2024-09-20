const util = require('util');
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
  // Định nghĩa nơi file upload sẽ được lưu lại
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/../uploads`));
  },
  filename: (req, file, callback) => {
    // ở đây các bạn có thể làm bất kỳ điều gì với cái file nhé.
    // Mình ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
    // let math = ["image/png", "image/jpeg"]
    // if (math.indexOf(file.mimetype) === -1) {
    //   let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
    //   return callback(errorMess, null);
    // }

    // Tên của file thì mình nối thêm một cái nhãn thời gian để tránh bị trùng tên file.
    let filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  }
});

// Khởi tạo middleware uploadManyFiles với cấu hình như ở trên,
let uploadManyFiles = multer({
  storage: storage,
})
.array("files", 8);

module.exports = util.promisify(uploadManyFiles)