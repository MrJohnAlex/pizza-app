import LinkButton from "../../ui/LinkButton";

export default function EmptyCart() {
  return (
    <div className="px-2 py-4">
      <LinkButton to="/menu">&rarr; Back to menu</LinkButton>
      <p className="mt-4 font-semibold">
        <span className="text-2xl">Your cart is empty!</span>
        <br />
        Start adding items to your cart by selecting from our wide selection of
        products.
      </p>
    </div>
  );
}
