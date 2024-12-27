import PropTypes from "prop-types";

export default function MenuItem({ pizza }) {
  const { name, imageUrl, ingredients, soldOut, unitPrice } = pizza;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>
        {unitPrice} {soldOut ? "Sold Out" : "Price per slice"}
      </p>
    </div>
  );
}

// Props validation
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    soldOut: PropTypes.bool.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }),
};
