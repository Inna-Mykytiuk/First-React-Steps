import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

//4 перенесли наш компонент з загального файла

// export default function Painting({
//   imageUrl,
//   title,
//   profileUrl,
//   authorName,
//   price,
// }) {
//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Author: <a href={profileUrl}>{authorName}</a>
//       </p>
//       <p>Credits: {price} credits</p>
//       <p>Accessibility: yes or not</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

// Стрілочна ф-я v-2
const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  authorName,
  price,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Credits: {price} credits</p>
      <p>Accessibility: yes or not</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

//Опис компонентів через PropTypes

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
};

export default Painting;
