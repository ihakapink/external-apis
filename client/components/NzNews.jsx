import React from 'react'
import { getNzNews } from '../api/nznews'

export default class NzNews extends React.Component {
  state = {
    NzNews: []
  }

  componentDidMount () {
    getNzNews()
      .then(res => {
        this.setState({
          NzNews: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h2>NZ Local News</h2>
        {this.state.NzNews.slice(0, 2).map(article => {
          return (
            <div key={article.index}>
              <h5>{article.title}</h5>
              <p>{article.content}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
