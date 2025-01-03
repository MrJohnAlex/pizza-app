import PropTypes from "prop-types";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentItemQuantity } from "./cartSlice";

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentItemQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex gap-2">
        <p>{quantity} &times;</p>
        <h2>{name}</h2>
      </div>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p>${totalPrice}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
