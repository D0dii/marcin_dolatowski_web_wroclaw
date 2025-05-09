"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { calculateItemTotalPrice } from "@/lib/utils";
import { CartItem } from "@/types";
import { Minus, Plus } from "lucide-react";

export function CartItemCard({ item }: { item: CartItem }) {
  const { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } = useCart();

  const formatPrice = (price: { main: number; fractional: number }) => {
    return `${price.main}.${price.fractional.toString().padStart(2, "0")} zł`;
  };

  const itemTotal = calculateItemTotalPrice(item);

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          {formatPrice(item.price)} x {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => decreaseQuantityInCart(item.id)}
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

        <Button onClick={() => removeFromCart(item.id)}>Usuń z koszyka</Button>

        <div className="w-20 text-right font-medium">{itemTotal.toFixed(2)} zł</div>
      </div>
    </div>
  );
}
