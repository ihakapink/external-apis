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
        this.state({
          source: info,
          translation: info

        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
    <>
    <h2>Maori language translator</h2>
    <div>{this.state.source}</div>
    <div>{this.state.translation}</div>
    </>
    )
  }
}
