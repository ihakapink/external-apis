import React, { Component } from 'react'

import { getCharacterInfo } from '../api/GameOfThrones'

export default class GameOfThrones extends Component {
  state = {
    name: '',
    gender: '',
    culture: '',
    born: '',
    died: '',
    titles: [
      ''
    ],
    aliases: [
      ''
    ]
  }
  componentDidMount () {
    getCharacterInfo()
      .then(character => {
        this.setState({
          name: character.name,
          gender: character.gender,
          culture: character.culture,
          born: character.born,
          died: character.died,
          titles: character.titles,
          aliases: character.aliases
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>{this.state.name}</h1>
        <h3>Gender: {this.state.gender}</h3>
        <h3>Culture: {this.state.culture}</h3>
        <h3>Born: {this.state.born}</h3>
        <h3>Died: {this.state.died}</h3>
        <h3>Titles: {this.state.titles}</h3>
        <h3>Aliases: {this.state.aliases}</h3>
      </React.Fragment>
    )
  }
}
