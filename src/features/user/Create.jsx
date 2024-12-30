import { useState } from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUsername } from "./userSlice.js";

export default function Create() {
  const [username, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateUsername(username));
    navigate("/menu");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
        className="input mb-8"
      />
      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}
