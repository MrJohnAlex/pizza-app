import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
export default function Cart() {
  return (
    <div>
      <LinkButton to="/menu">&rarr; Back to menu</LinkButton>
      <ul>
        <CartItem />
      </ul>
      <div className="flex space-x-4">
        <Button type="primary">Order Pizza</Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}
