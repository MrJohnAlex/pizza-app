import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartOverview() {
  const quantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  if (!quantity) return null;
  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{quantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
