import request from 'superagent'

const url = 'https://swapi.co/api'
const people = `/people/${Math.floor(Math.random() * 50)}`

export function getCharacter () {
  return request
    .get(`${url}${people}`)
    .then(data => data.body)
}
export function getLink (link) {
  return request
    .get(link)
    .then(data => data.body)
}
