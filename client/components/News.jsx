import React from "react";
import { getNews } from "../API/news";

export default class News extends React.Component {
  state = {
    news: []
  };

  componentDidMount() {
    getNews().then(res => {
      this.setState({
        news: res
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>News</h2>
        {this.state.news.slice(0).map(article => {
          return (
            <div key={article.index}>
              <h5>{article.author}</h5>
              <h5>{article.title}</h5>
              <p>{article.content}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
