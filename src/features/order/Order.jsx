import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
export default function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    customer,
  } = order;

  return (
    <div>
      <h1>Order ID: {id}</h1>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      <p>Priority Price: {priorityPrice}</p>
      <p>Order Price: {orderPrice}</p>
      <p>Estimated Delivery: {estimatedDelivery}</p>
      <p>Customer: {customer}</p>
    </div>
  );
}

export function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}
