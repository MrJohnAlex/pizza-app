import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

export default function CreateOrder() {
  const cart = [];
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <h1>Ready to order?</h1>
      <div>
        <Form method="POST">
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Phone:</label>
            <input type="phone" name="phone" required />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" required />
          </div>
          <div>
            <label>Want to give your order priority?</label>
            <input type="checkbox" name="priority" />
          </div>
          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Placing order" : "Order now"}
            </button>
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
