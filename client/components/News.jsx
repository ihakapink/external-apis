import React from "react";
import { getNews } from "../API/news";

export default class News extends React.Component {
  state = {
    author: "",
    title: "",
    description: ""
  };

  componentDidMount() {
    getNews().then(res => {
      const { author, title, description } = res;
      this.setState({
        author,
        title,
        description
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>Author: {this.state.author}</h2>
        <h2>Title: {this.state.title}</h2>
        <p>Description: {this.state.description}</p>
      </React.Fragment>
    );
  }
}
