import React from 'react'
import { showPhotoImage } from '../api/spacePhotos'

export default class showPhoto extends React.Component {
  state = {
    hdurl: '',
    explanation: ''
  }

  componentDidMount () {
    showPhotoImage()
      .then(photoData => {
        const { hdurl, explanation } = photoData
        this.setState({
          hdurl,
          explanation
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h2>I'm overthinking it now:</h2>
        <img src={this.state.hdurl} alt={this.state.explanation}/>
        <p>{this.state.explanation}</p>
      </React.Fragment>
    )
  }
}
