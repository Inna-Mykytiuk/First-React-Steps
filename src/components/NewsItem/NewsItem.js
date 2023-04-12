export const NewsItem = ({ news }) => {
  return news.articles.map(({ url, title, urlToImage, description }) => {
    return (
      <div key={url}>
        <h2>{title}</h2>
        <img src={urlToImage} alt={title} />
        <p>{description}</p>
      </div>
    );
  });
};
