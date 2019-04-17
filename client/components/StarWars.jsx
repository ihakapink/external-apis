import React from 'react'
import { getStarWars } from '../api/starwars'
// import { url } from '../api/news'

export default class StarWars extends React.Component {
    state = {
      name: '',
      gender: '',
      mass: '',
      hair_color: ''
    }
    componentDidMount () {
      getStarWars()
        .then(res => {
          const { name, gender, mass, hair_color } = res
          this.setState({
            name,
            gender,
            mass,
            hair_color
          })
        })
    }

    render () {
      return (
            <>
                <h3>{this.state.name}</h3>
                <ul>
                  <li>Gender: {this.state.gender}</li>
                  <li>Mass: {this.state.mass}</li>
                  <li>hair_color: {this.state.hair_color}</li>
                </ul>
                <hr />
            </>
      )
    }
}
