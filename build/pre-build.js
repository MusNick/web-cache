'use strict'
const inquire = require('inquirer')
const async = require('async')

let chooseEnv = {
  type: 'list',
  name: 'chooseEnv',
  message: '请选择开发应用',
  choices: [{
    name: '灰度',
    value: 'huidu'
  }, {
    name: '正式',
    value: 'https'
  }]
}

let retAnswers = {}

module.exports = new Promise(function (resolve, reject) {
  async.waterfall([
    function (cb) {
      inquire.prompt(chooseEnv).then(function (anwers) {
        console.log(anwers)
        retAnswers.chooseEnv = anwers.chooseEnv
        cb(null)
      })
    },
    function (cb) {
      resolve(retAnswers)
      cb(null, '')
    }
  ])
   // 打包
})