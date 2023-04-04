export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <span>icon </span>
          {time} min
        </div>
        <div>
          <span>icon </span>
          {servings} servings
        </div>
        <div>
          <span>icon </span>
          {calories} calories
        </div>
      </div>
    </div>
  );
};
