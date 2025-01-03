import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
export default function MenuItem({ pizza }) {
  const { id, name, imageUrl, ingredients, soldOut, unitPrice } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentItemQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(",")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{unitPrice}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddItem}>
              Add to card
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

// Props validation
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    soldOut: PropTypes.bool.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }),
};
