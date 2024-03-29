require('./connect-mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const router = require('./router')
const errorHandler = require('./error-handler')
const publicPath = path.join(__dirname, '../public')

const port = 9000

// using middlewares
app.use(bodyParser.json())

// routing
app.use(router)
app.use('/', express.static(publicPath))

// // error handling
app.use(errorHandler)

// listening
app.listen(port, (err) => {
  if(err) {
    console.error('Server open failed!')
    console.error(err)
  } else {
    console.log(`Server opened at port: ${port}`)
  }
})
