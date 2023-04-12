import { Component } from 'react';
import { getNews } from '../services/getNews';

export class NewsList extends Component {
  state = {
    news: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      getNews(this.props.value)
        .then(response => response.json())
        .then(news => {
          this.setState({ news });
          console.log(news);
        });
    }
  }

  render() {
    return (
      this.state.news &&
      this.state.news.articles.map(
        ({ url, title, urlToImage, description }) => {
          return (
            <div key={url}>
              <h2>{title}</h2>
              <img src={urlToImage} alt={title} />
              <p>{description}</p>
            </div>
          );
        }
      )
    );
  }
}
