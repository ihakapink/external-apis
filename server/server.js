const path = require('path')
const express = require('express')
const request = require('superagent')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())

server.get('/showPhoto', (req, res) => {
  const url = 'https://api.nasa.gov/planetary/apod?api_key='
  const apiKey = 'oH0wCiZ8oNzskzc29u3IGkj3fzFNaW1CPlbGj4rJ'

  return request.get(url + apiKey)
    .then(resp => {
      res.send(resp.body)
      return resp.body
    })
})

module.exports = server
