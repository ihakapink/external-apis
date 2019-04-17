import React from 'react'
import request from 'superagent'

class Skywalker extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    request
      .get('https://swapi.co/api/starships/9/')
      .then(res => {
        console.log(res.body)
        const { name } = res.body
        this.setState({
          name
        })
      })
  }

  render () {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default Skywalker
