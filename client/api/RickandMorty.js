import request from 'superagent'

const url = 'https://rickandmortyapi.com/api/character/'
const person = Math.floor(Math.random() * 100)

export function getRickandMorty () {
  return request
    .get(url + person)
    .then(res => {
      return res.body
    })
}
