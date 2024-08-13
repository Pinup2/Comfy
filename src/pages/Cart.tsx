import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <Link to="/" className="text-7xl text-red-900">
        back home
      </Link>
      <div>
        <Button asChild size="lg">
          <Link to="/">Home button</Link>
        </Button>
      </div>
    </div>
  );
}
