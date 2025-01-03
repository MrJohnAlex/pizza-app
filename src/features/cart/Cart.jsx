import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
export default function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  function handelClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      <LinkButton to="/menu">&rarr; Back to menu</LinkButton>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="flex space-x-4">
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
        <Button type="secondary" onClick={handelClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
