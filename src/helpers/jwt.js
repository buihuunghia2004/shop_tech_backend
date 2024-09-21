const { UnAuthorizedError } = require('@/core/error.res');
const jwt = require('jsonwebtoken')

let generateToken = (user, privateKey,tokenLife) => {    
  return new Promise((resolve, reject) => {
    // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây    
    const userData = {
      _id: user._id,
      email: user.email,
      roles: user.roles
    }
    
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

let verifyToken = async (token, publicKey) => {
  try {
    const decoded = await jwt.verify(token, publicKey, { algorithms: ['RS256'] });    
    return decoded;
  } catch (error) {
    throw new Error('A005-AccessTokenNotValid');
  }
};

module.exports = {
  generateToken,
  verifyToken
}