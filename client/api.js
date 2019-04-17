import request from 'superagent'

const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`

export function getNasa () {
  return request.get(url)
    .then(res => res.body)
    .catch(err => console.error(err))
}