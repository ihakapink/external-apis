import React from 'react'
import { getProverb } from '../APIs/teReo';

export class TeReoProverbs extends React.Component {
  state = {
    source: '',
    translation: ''
  }
  componentDidMount () {
    getProverb()
    .then(proverb => {
      this.setState({
        source: proverb.source,
        translation: proverb.translation
     
      })
    })
  }
  
  render () {
  return(
    <>
      <h1>Proverb</h1>
      <p>TeReo: {this.state.source}</p> <br />
      <p>Translation: {this.state.translation}</p>
    </>
  )
  }
}
