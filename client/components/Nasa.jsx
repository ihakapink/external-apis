import React, { Component } from 'react'

import { getNasa } from '../api'

export default class Nasa extends Component {
  state = {
    title: '',
    description: '',
    link: ''
  }

  componentDidMount () {
    getNasa()
      .then(res => {
        this.setState({
          title: res.title,
          description: res.description,
          link: res.link
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <p> Nasa Natural Events </p>
        <h3>title: {this.state.title}</h3>
        <h3>description: {this.state.description}</h3>
        <h3>link: {this.state.link}</h3>
      </React.Fragment>
    )
  }
}
