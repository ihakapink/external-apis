import request from 'superagent'

const url = 'https://api.wheretheiss.at/v1/satellites/'
const satelliteId = '25544'

export function getSatellites () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.log(err))
}

export function getSatelliteInfo () {
  return request
    .get(url + satelliteId)
    .then(res => res.body)
    .catch(err => console.log(err))
}
