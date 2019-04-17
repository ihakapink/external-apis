import React from 'react'
import { getZomato } from '../APIs/zomato'

export class Zomato extends React.Component {
  state = {
    name: '',
    id: ''
  }

  componentDidMount () {
    getZomato()
      .then(zomato => {
        console.log('component', zomato[0])
        this.setState({
          zomato: res
          // name: zomato[0].name,
          // id: zomato[0].id
        })
          .catch(err => {
            console.error('Error:', err)
          })
      })
  }

  render () {
    return (
      <>
        <h1>Zomato</h1>
        <h1>{this.state.name}</h1><br />
        <h1>{this.state.id}</h1>
      </>
    )
  }
}
