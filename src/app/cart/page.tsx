"use client";
import Link from "next/link";
import { CartItemCard } from "@/components/cart-item-card";
import { CartSummary } from "@/components/cart-summary";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

import { useCart } from "@/hooks/use-cart";

export default function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Twój koszyk jest pusty</h1>
          <p className="text-muted-foreground mb-8">Wygląda na to, że jeszcze nic do niego nie dodałeś.</p>
          <Link href="/">
            <Button>Kontynuuj zakupy</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Twój koszyk</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted px-4 py-3 font-medium">Produkty ({cart.length})</div>
            <div className="p-4 space-y-0">
              {cart.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <CartSummary />
        </div>
      </div>

      <div className="mt-8">
        <Link href="/">
          <Button variant="outline">Kontynuuj zakupy</Button>
        </Link>
      </div>
    </div>
  );
}
