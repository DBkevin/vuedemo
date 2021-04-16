const mongoose = require('../common/db')
const user = new mongoose.Schema({
  userName: String,
  password: String,
  userMail: String,
  userPhone: String,
  userAdmin: Boolean,
  userPower: Number,
  userStop: Boolean
})
// 用户查找方法
user.statics.findAll = (callback) => {
  userModel.find({}, callback)
}
// 使用用户名查找
user.statics.findByUserName = (name, callback) => {
  userModel.find({userName: name}, callback)
}
// 登陆匹配,账号密码一致且没有封停
user.statics.findUserLogin = (name, password, call) => {
  userModel.find({ userNmae: name, password: password, userStop: false }, call)
}
// 密码重置,使用邮箱,电话和用户名
user.statics.findUserPassword = (name, email, phone, call) => {
  userModel.find({ userNmae: name, userMail: email, userPhone: phone }, call)
}
const userModel = mongoose.model('user', user)
exports = module.exports = userModel
