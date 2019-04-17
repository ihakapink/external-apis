import React from 'react'
import Translate from './Translate'



let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
let yyyy = today.getFullYear()

let date = dd + '/' + mm + '/' + yyyy







export default class App extends React.Component {
  render() {
    
    return (
      <>
      <h2>Amy and Stru API assesment</h2>
      <Translate/>
      </>
  
    
  )
}
}
export default App

