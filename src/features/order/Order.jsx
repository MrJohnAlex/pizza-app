import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { useEffect } from "react";
export default function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data & (fetcher.state === "idle")) {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    orderPrice,
    estimatedDelivery,
    customer,
    cart,
  } = order;

  return (
    <div className="mt-3 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Order ID: {id}</h1>
        <div className="flex gap-3">
          <span className="rounded-md bg-green-500 px-2.5 py-3.5 font-semibold uppercase text-white">
            {status}
          </span>
          {priority && (
            <span className="rounded-md bg-red-500 px-2.5 py-3.5 font-semibold uppercase text-white">
              Priority
            </span>
          )}
        </div>
      </div>
      <div className="mt-3 bg-slate-300 px-6 py-9">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-medium">Estimated Delivery:</h2>
          <p className="font-mono text-lg">{estimatedDelivery}</p>
        </div>
      </div>
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-5 flex items-center justify-between gap-3 bg-slate-200 px-6 py-4"
          >
            <div className="flex items-center justify-between">
              <span className="mr-3 text-xl font-medium">
                {item.quantity} X
              </span>
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                {/* <p className="text-sm capitalize italic text-stone-500">
                  {fetcher.data
                    .find((el) => el.id === item.id)
                    .ingredients.join(", ")}
                </p> */}
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-xl font-medium">
                UnitPrice:{" "}
                <span className="font-semibold">{item.unitPrice}</span>
              </p>
              <p className="text-xl font-medium">
                TotalPrice:{" "}
                <span className="font-semibold">{item.totalPrice}</span>
              </p>
            </div>
          </div>
        );
      })}
      <div className="mt-5 bg-slate-500 px-6 py-10 text-center text-white">
        <h1 className="text-2xl font-semibold">Order Infomation</h1>
        <div className="mt-5 flex items-start justify-between">
          <h1 className="text-2xl font-medium uppercase">
            Customer Name: <span className="text-green-400">{customer}</span>
          </h1>
          <h2 className="text-2xl font-medium uppercase">
            Order Total Price: <span className="ml-5">${orderPrice}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}
