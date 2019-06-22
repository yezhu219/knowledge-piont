const xml2js = require('xml2js')


exports.parseXML = xml => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, {
      trim: true
    }, (err, content) => {
      if (err) reject(err)
      else resolve(content)
    })
  })
}

const formate = result => {
  console.log('result')
  console.log(result)
  let message = {}
  if (typeof result === 'object') {
    const keys = Object.keys(result)
    for (let i = 0; i < keys.length; i++) {
      let item = result[keys[i]]
      let key = keys[i]
      console.log('item')
      console.log(item)
      if (!(item instanceof Array) || item.length === 0) {
        continue
      }
      if (item.length === 1) {
        let val = item[0]
        if (typeof val === 'object') {
          message[key] = formate(val)
        } else {
          message[key] = val || ''
        }
      } else {
        message[key] = []
        for (let j = 0; j < item.length; j++) {
          message[key].push(formate(item[j]))
        }
      }
    }
    return message

  }


}
module.exports.formate = formate