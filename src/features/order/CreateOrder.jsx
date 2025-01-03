import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import store from "../../store";
import EmptyCart from "../cart/EmptyCart";

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const username = useSelector((state) => state.user.username);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalPrice = withPriority ? totalCartPrice * 0.2 : 0;
  if (!cart.length) return <EmptyCart />;
  return (
    <div>
      <h1 className="my-8 text-center text-2xl font-semibold">
        Ready to order?
      </h1>
      <div>
        <Form method="POST">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Name:</label>
            <input
              className="input"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Phone:</label>
            <input className="input" type="phone" name="phone" required />
          </div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address:</label>
            <input type="text" name="address" required className="input" />
          </div>
          <div className="mb-12 flex items-center">
            <input
              className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label className="ml-3 font-semibold">
              Want to give your order priority?
            </label>
          </div>
          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <Button disabled={isSubmitting} type="primary">
              {isSubmitting
                ? "Placing order"
                : `Order now from price: ${totalPrice}`}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);

  const newOrder = await createOrder(order);

  store.dispatch(clearCart);

  return redirect(`/order/${newOrder.id}`);
}
