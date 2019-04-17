import request from 'superagent'

const url = 'https://newsapi.org/v2/top-headlines?country=nz&apiKey='
// const url = 'https://newsapi.org/v2/top-headlines?country=nz&category=technology&apiKey='
const token = 'a942dc69b6b94093b88f754c7f0737d0'

export function getNzNews () {
  return request
    .get(`${url}${token}`)
    .then(res => {
      return res.body.articles
    })
    .catch(err => console.error(err))
}
