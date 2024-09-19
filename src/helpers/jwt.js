const jwt = require('jsonwebtoken')

let generateToken = (user, privateKey,tokenLife) => {    
  return new Promise((resolve, reject) => {
    // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
    console.log(user);
    
    const userData = {
      _id: user._id,
      email: user.email,
      roles: user.roles
    }
    console.log(userData);
    
    // Thực hiện ký và tạo token
    jwt.sign(
      {data: userData},
      privateKey,
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

let verifyToken = (token, publicKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, publicKey, (error, decoded) => {
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