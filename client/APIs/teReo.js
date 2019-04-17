import request from 'superagent'

const url = 'https://eda-te-reo.herokuapp.com/api/whakatauki'

export function getProverb () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.log(err))
}
