import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza React App</Link>
      <Link to="/menu">Menu</Link>
    </header>
  );
}
