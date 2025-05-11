"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { calculateItemTotalPrice, formatCurrencyZloty, formatPrice } from "@/lib/utils";
import { CartItem } from "@/types";
import { IncreaseDecreaseQuantity } from "./increase-decrease-quantity";

export function CartItemCard({ item }: { item: CartItem }) {
  const { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } = useCart();

  const itemTotal = calculateItemTotalPrice(item);

  return (
    <div className="flex items-center justify-between py-4 border-b ">
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          {formatPrice(item.price)} x {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <IncreaseDecreaseQuantity
          increaseQuantityInCart={increaseQuantityInCart}
          decreaseQuantityInCart={decreaseQuantityInCart}
          item={item}
        />

        <Button onClick={() => removeFromCart(item.id)}>Usuń z koszyka</Button>

        <div className="w-20 text-right font-medium">{formatCurrencyZloty(itemTotal)}</div>
      </div>
    </div>
  );
}
