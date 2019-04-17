import React from 'react'

import { getRickandMorty } from '../api/RickandMorty'
import { type } from 'os'

export default class RickandMorty extends React.Component {
state = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: ''

}

componentDidMount () {
  getRickandMorty()
    .then(res => {
      const { name, status, species, type, gender, image } = res
      this.setState({
        name,
        status,
        species,
        type,
        gender,
        image
      })
    })
    .catch(err => {
      console.error('Error:', err)
    })
}

render () {
  return (
    <>
      <h3>{this.state.name}</h3>
      <h3>{this.state.status}</h3>
      <h3>{this.state.species}</h3>
      <h3>{this.state.type}</h3>
      <h3>{this.state.gender}</h3>
      <img src={this.state.image}></img>
      </>

  )
}
}
