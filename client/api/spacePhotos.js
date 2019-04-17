import request from 'superagent'

const url = 'http://localhost:3000/showPhoto'

export function showPhotoImage () {
  return request.get(url)
    .then(res => res.body)
    .catch(err => console.error(err))
}
