import React from 'react'
import request from 'superagent'

class Thrones extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    request
      .get('https://swapi.co/api/planets/3/')
      // .then(console.log)
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

export default Thrones
