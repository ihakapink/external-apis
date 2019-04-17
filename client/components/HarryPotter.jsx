import React from 'react'

import { getCharacter } from '../api/HarryPotter'

export default class HarryPotter extends React.Component {
  state = {
    name: ''
  }

  componentDidMount () {
    getCharacter()
      .then(res => {
        const { name } = res
        this.setState({
          name
        })

      }
      )
  }
  render () {
    return (
      <h3>{this.state.name}</h3>
    )
  }
}
