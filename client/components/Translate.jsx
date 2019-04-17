import React from 'react'
import { getTranslate } from '../translateApi'

export default class Translate extends React.Component {
  state ={
    source: '',
    translation: ''
  }

  componentDidMount () {
    getTranslate()
      .then(info => {
        this.setState({
          source: info.source,
          translation: info.translation


        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    //console.log(this.state.source)
    return (
    <>
    <h3>Maori message translated to English</h3>
    <div> <strong> Maori: </strong> {this.state.source}</div>
    <div> <strong> English Translation: </strong>{this.state.translation}</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>Sorry for the spelling errors :) </div>
    
    </>
    )
  }
}
