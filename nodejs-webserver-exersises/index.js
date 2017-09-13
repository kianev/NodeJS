let http = require('http')
let port = 1337
let url = require('url')
let handlers = require('./handlers/index')


http
  .createServer((req, res) => {

    for (let handler of handlers){
      let next = handler(req, res)
      if(!next){
        break
      }
    }
  })
  .listen(port)

console.log(`Server listening on port ${port}`)
