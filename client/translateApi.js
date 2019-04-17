import request from 'superagent'


const url = https://eda-te-reo.herokuapp.com/api/whakatauki

export function getTranslate() {
return request 
.get(url)
.then(res => {
  return res.body
})

}