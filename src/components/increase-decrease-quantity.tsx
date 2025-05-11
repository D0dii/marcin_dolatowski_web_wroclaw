import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { CartItem } from "@/types";

export function IncreaseDecreaseQuantity({
  decreaseQuantityInCart,
  increaseQuantityInCart,
  item,
}: {
  decreaseQuantityInCart: (id: number) => void;
  increaseQuantityInCart: (id: number) => void;
  item: CartItem;
}) {
  return (
    <div className="flex items-center border rounded-md self-center">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-none"
        onClick={() => decreaseQuantityInCart(item.id)}
        disabled={item.quantity === 1}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Zmniejsz ilość</span>
      </Button>

      <span className="w-8 text-center">{item.quantity}</span>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-none"
        onClick={() => increaseQuantityInCart(item.id)}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Zwiększ ilość</span>
      </Button>
    </div>
  );
}
