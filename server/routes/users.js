var express = require('express')
var router = express.Router()
const user = require('../models/users')

const crypto = require('crypto')
/*
const movie = require('../models/movie')
const mail = require('../models/mail')
const comment = require('../models/comment')
*/
const init_token = 'Lee2'
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
// 登陆
router.post('/login', (req, res, next) => {
  if (!req.body.userName) {
    let js = reJSON('用户名为空')
    console.log(js)
    res.json(js)
  }
  if (!req.body.password) {
    res.json(reJSON('密码位空'))
  }
  user.findUserLogin(req.body.userName, req.body.password, (err, userSave) => {
    if (userSave.length !== 0) {
      // 通过MD5查看密码
      let token_after = getMD5Password(userSave[0]._id)
      res.json({ status: 0, data: { token: token_after, user: userSave }, message: '登陆成功'})
    } else {
      res.json(reJSON('密码错误'))
    }
    if (err) {
      console.log(err)
    }
  })
})

// 注册
router.post('/register', (req, res, next) => {
  if (!req.body.userName) {
    res.json({ status: 1, message: '用户名为空' })
  }
  if (!req.body.password) {
    res.json({ status: 1, message: '密码为空' })
  }
  if (!req.body.userMail) {
    res.josn({ status: 1, message: '邮箱位空' })
  }
  if (!req.body.userPhone) {
    res.josn({ status: 1, message: '用户手机位空' })
  }
  // eslint-disable-next-line handle-callback-err
  user.findByUserName(req.body.userName, (err, userSave) => {
    // eslint-disable-next-line eqeqeq
    if (userSave.length != 0) {
      // 返回错误
      res.json({ status: 1, message: '用户已经注册' })
    } else {
      const registerUser = new user({
        userName: req.body.userName,
        password: req.body.password,
        userMail: req.body.userMail,
        userPhone: req.body.userPhone,
        userAdmin: 0,
        userPower: 0,
        userStop: 0
      })
      registerUser.save(() => {
        res.json({ status: 0, message: '祖册成功' })
      })
    }
  })
})
// 提交评论
router.post('/postComment', (req, res, next) => {

})
// 用户点赞
router.post('/support', (req, res, next) => {

})
// 找回密码
router.post('/findPassword', (req, res, next) => {

})

// 发送站内信
router.post('/sendEamil', (req, res, next) => {
  // 用户显示站内信,其中的receive 为1是发送的,2 是接收
})

// 获取MD5值
function getMD5Password (id) {
  const md5 = crypto.createHash('md5')
  const token_before = id + init_token
  return md5.update(token_before).digest('hex')
}
function reJSON (msg, status = 1) {
  return { status: status, msg: msg }
}
module.exports = router
