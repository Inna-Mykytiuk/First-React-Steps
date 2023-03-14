import Painting from './Painting';

function PaitingList({ items }) {
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Painting
          imageUrl={item.url}
          alt={item.title}
          authorName={item.author.tag}
          profileUrl={item.author.url}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
  </ul>;
}

export default PaitingList;
