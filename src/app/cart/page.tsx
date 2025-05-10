"use client";
import Link from "next/link";
import { CartItemCard } from "@/components/cart-item-card";
import { CartSummary } from "@/components/cart-summary";
import { Button } from "@/components/ui/button";

import { useCart } from "@/hooks/use-cart";
import { EmptyCart } from "@/components/empty-cart";
import { Loader2 } from "lucide-react";

export default function Cart() {
  const { cart } = useCart();

  if (cart === undefined) {
    return (
      <div className="flex items-center justify-center mt-64">
        <Loader2 className="animate-spin" size={56} />
      </div>
    );
  }

  if (cart.length === 0) {
    return <EmptyCart />;
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
        <Button asChild variant="outline">
          <Link href="/">Kontynuuj zakupy</Link>
        </Button>
      </div>
    </div>
  );
}
