import Button from "../../ui/Button";

export default function CartItem() {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>4 &times;</p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>$50</p>
        <Button type="small">Remove</Button>
      </div>
    </li>
  );
}
