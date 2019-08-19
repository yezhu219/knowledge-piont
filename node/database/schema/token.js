const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TokenSchema = new Schema({
  name: String,
  token: String,
  expires_in: Number,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

TokenSchema.pre('save', function (next) { //这里不能使用箭头函数，this指向了{}
 
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    try {
      this.meta.updatedAt = Date.now()
    } catch (err) {
      console.log('err', err)
    }
  }
  next()
})

TokenSchema.statics = {
  async getAccessToken() {
    console.log('tokenSchema--getAccessToken')
    const token = await this.findOne({
      name: 'access_token'
    })
    if (token && token.token) {
      token.access_token = token.token

    }
    return token
  },
  async saveAccessToken(data) {
    console.log('tokenSchema--saveAccessToken')
    let token = await this.findOne({
      name: 'access_token'
    })
  
    if (token && token.token) {
      token.access_token = data.access_token
      token.expires_in = data.expires_in
    } else {
      token = new Token({
        name: 'access_token',
        token: data.access_token,
        expires_in: data.expires_in
      })
    }
    await token.save()
    return token
  },
}

const Token = mongoose.model('Token', TokenSchema)