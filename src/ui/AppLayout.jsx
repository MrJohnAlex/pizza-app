import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid-row-3 grid h-screen">
      {isLoading && <Loader />}
      <Header />
      <div className="md:px-0">
        <main className="mx-auto max-w-3xl px-4">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
