import React from 'react'
import Finance from './Finance'
import StarWars from './StarWars'
import NzNews from './NzNews'

// import Zomato from './Zomato'

// import { Zomato } from './Zomato.jsx'

class App extends React.Component {
  render () {
    return (
    <>
      <StarWars />
      <Finance />
      <NzNews />
    </>
    )
  }
}
export default App
