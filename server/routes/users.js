var express = require('express')
var router = express.Router()
const user = require('../models/user')

const crypto = require('crypto')
const movie = require('../models/movie')
const mail = require('../models/mail')
const comment = require('../models/comment')
const init_token = 'Lee2'
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
// 登陆
router.post('/login', (req, res, next) => {

})
// 注册
router.post('/register', (req, res, next) => {

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

}

module.exports = router
