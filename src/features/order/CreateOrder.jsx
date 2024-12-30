import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

export default function CreateOrder() {
  const cart = [];
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const username = useSelector((state) => state.user.username);
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
              name="name"
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
            />
            <label className="ml-3 font-semibold">
              Want to give your order priority?
            </label>
          </div>
          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <Button disabled={isSubmitting} type="primary">
              {isSubmitting ? "Placing order" : "Order now"}
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
    priority: data.priority === "on",
  };
  const newOrder = createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
