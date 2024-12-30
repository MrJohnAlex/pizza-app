import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3">
      <Link to="/" className="tracking-widest">
        Fast Pizza React App
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}
