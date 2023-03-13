//Для того щоб вставити розмітку імпортуємо елементи
import Painting from './Painting.js';
//переносимо розмітку масиву даних туди де буде вставлятися розмітка
import paintings from '../painting.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Painting
        // imageUrl={paintings[0].url}
        alt={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      />
      <Painting
        imageUrl={paintings[1].url}
        alt={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
      />
    </div>
  );
};
