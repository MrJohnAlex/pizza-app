import { useSelector } from "react-redux";
import Create from "../features/user/Create";
import Button from "./Button";

export default function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best Pizza. <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <Create />
      ) : (
        <Button to="/menu" type="primary">
          Countinue ordering, {username}
        </Button>
      )}
    </div>
  );
}
