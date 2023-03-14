import React from 'react';
import ReactDOM from 'react-dom/client';
// import paintings from './painting.json';
import { App } from 'components/App';
import './index.css';

//створення нового елементу
// const elem1 = document.createElement('span', { children: 'Hello' });
// const elem2 = document.createElement('span', { children: 'Inna' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello Inna',
// });

// console.log('element', element);

// const jsxElem = <div>Hello Inna</div>;
// console.log('jsx', jsxElem);

// const elem3 = <span>Hello</span>;
// console.log('elem3', elem3);

// const elem4 = <span>Inna</span>;
// console.log('elem3', elem4);

// //jsx object
// const jsxElements = (
//   <div>
//     {elem3}
//     {elem4}
//   </div>
// );
// console.log('jsxElements', jsxElements);

//ренднр елементів на сторінку
// ReactDOM.createRoot(document.getElementById('root')).render(element);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const data = paintings[0];

//розмітка 3
// function Painting(props) {
//   return (
//     <div>
//       <img src={data.url} alt={data.title} width="480" />
//       <h2>{data.title}</h2>
//       <p>
//         Author: <a href={data.author.url}>{data.author.tag}</a>
//       </p>
//       <p>Credits: {data.price} price</p>
//       <p>Accessibility: available or unavailable</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

//ренднр елементів на сторінку
// ReactDOM.createRoot(document.getElementById('root')).render(<Painting />);

//5

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
