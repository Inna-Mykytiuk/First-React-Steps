import { Recipe } from './Recipe';

export const RecipeList = ({ items }) => {
  return (
    <ul style={{ display: 'flex', gap: 16, listStyle: 'none' }}>
      {items.map(item => (
        <li key={item.id}>
          <Recipe item={item} />
        </li>
      ))}
    </ul>
  );
};
