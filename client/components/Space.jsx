import React from 'react'
import { getSpace } from '../APIs/space';

export class Space extends React.Component {
  state = {
    name: '',
    id: ''
  }
  
  componentDidMount () {
    getSpace()
    .then(space => {
      console.log('component', space[0])
      this.setState({
        name: space[0].name,
        id: space[0].id
      })
    })
  }

  render () {
    return (
      <>
        <h1>Space</h1>
        <h1>{this.state.name}</h1><br />
        <h1>{this.state.id}</h1>
      </>
    )
  }
}
