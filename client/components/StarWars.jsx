import React, { Component } from 'react'
import { getCharacter, getLink } from '../api/starwars'

export default class StarWars extends Component {
  state ={

  }

  componentDidMount () {
    getCharacter()
      .then(res => {
        this.setState({
          name: res.name,
          homeworld: res.homeworld,
          films: res.films
        })
      })
      .then(() => {
        getLink(this.state.homeworld)
          .then(data =>
            this.setState({
              homeworld: data.name
            })
          )
      })
      .then(() => {
        getLink(this.state.films)
          .then(data => {
            this.setState({
              film: data.title
            })
          })
      })
  }

  render () {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>Planet:  {this.state.homeworld}</p>
        <p>Films featured in: {this.state.films}</p>
      </div>
    )
  }
}
