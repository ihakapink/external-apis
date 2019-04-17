import request from 'superagent'

const url = 'https://www.potterapi.com/v1/characters/'
const key = '$2a$10$TEurl/bxxhuKn11jyH0CzuiD0WV5zb7eLcetDmCdWvccFFtFMpDFa'
const person = '{1}'

export function getCharacter () {
  return request
    .get(`${url}${person}?key=${key}`)
    .then(res => {
      return res.body
    })
}
