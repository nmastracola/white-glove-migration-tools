const https = require('https')
const express = require('express')
const expressWS = require('express-ws')
const find = require('./routes/find')

const app = express();
const server = https.createServer(app)

expressWS(app, server)

app.ws('/find', (ws, req) => {
  ws.on('response', msg => {
    ws.send(msg)
  })

  ws.on('close', ()=> {
    console.log('Websocket was closed')
  })
})

const port = 443
app.listen(port, console.log("listening on port " + port))

module.exports = app