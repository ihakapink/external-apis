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
          gender: res.gender,
          hair_color: res.hair_color
        })
      })

    // getLink(this.state.homeworld)
    //   .then(data =>
    //     console.log(data)
    //     // this.setState({
    //     //   homeworld: data.name
    //     // })
    //   )

    //   .catch(err => console.error(err))
    // // getLink(film)
    // //   .then(res => {
    // //     this.setState({
    // //       film: res.title
    // //     })
    // //   })
  }

  render () {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>Gender:  {this.state.gender}</p>
        <p>Hair Color: {this.state.hair_color}</p>
      </div>
    )
  }
}
