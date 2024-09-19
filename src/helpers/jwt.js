const jwt = require('jsonwebtoken')

let generateToken = (user, publicKey,tokenLife) => {
  console.log(publicKey);
  
    
  return new Promise((resolve, reject) => {
    // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
    const userData = {
      _id: user._id,
      email: user.email,
      roles:user.roles
    }
    // Thực hiện ký và tạo token
    jwt.sign(
      {data: userData},
      publicKey,
      {
        algorithm: "RS256",
        expiresIn: tokenLife,
      },
      (error, token) => {
        if (error) {
          return reject(error);
        }
        resolve(token);
    });
  });
}

let verifyToken = (token, privateKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (error, decoded) => {
      if (error) {
        return reject(error);
      }
      resolve(decoded);
    })
  })
}

module.exports = {
  generateToken,
  verifyToken
}