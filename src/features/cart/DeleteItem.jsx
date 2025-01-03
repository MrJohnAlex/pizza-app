import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";
import PropTypes from "prop-types";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
        Remove
      </Button>
    </div>
  );
}
DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};
