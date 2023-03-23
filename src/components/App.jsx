//Для того щоб вставити розмітку імпортуємо елементи
import PaitingList from './PaitingList';
//переносимо розмітку масиву даних туди де буде вставлятися розмітка
import paintings from '../painting.json';
import Section from './Section';

//поелементний рендер
// export const App = () => {
//   // const isOnline = true;
//   // const isOnline = false;
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {/* {isOnline && 'Online'} */}
//       {/* {isOnline ? 'Online' : 'Offline'} */}
//       <Painting
//         // imageUrl={paintings[0].url}
//         alt={paintings[0].title}
//         authorName={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />
//       <Painting
//         imageUrl={paintings[1].url}
//         alt={paintings[1].title}
//         authorName={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />
//     </div>
//   );
// };

//рендер колекції

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        listStyle: 'none',
      }}
    >
      {/* <PaitingList items={paintings} /> */}
      {/* <Section title="Top of the week" />
      <PaitingList items={paintings} />
      <Section /> */}
    </div>
  );
};
