import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-5 font-semibold sm:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};
