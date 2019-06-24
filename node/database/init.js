const mongoose = require('mongoose')
const path = require('path')
const glob = require('glob')

mongoose.Promise = global.Promise

exports.initSchema = () => {
  glob.sync(path.resolve(__dirname, './schema', '**/*.js')).forEach(require)
  console.log('db')
}
exports.connect = db => {
  return new Promise((resolve) => {
    mongoose.connect(db, {
      useNewUrlParser: true
    })
    mongoose.connection.on('disconnect', () => {
      console.log('数据库挂了！！！')
    })
    mongoose.connection.on('error', (err) => {
      console.log(err)
    })
    mongoose.connection.on('open', () => {
      resolve()
      console.log('mongodb is connected')
    })

  })
}