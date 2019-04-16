import request from 'superagent'

const url = 'https://api.wheretheiss.at/v1/satellites'

export function getSpace () {
  return request
    .get(url)
    .then(res => {
      console.log('api call', res.body)
      return res.body
    })
    .catch(err => console.log(err))
}
