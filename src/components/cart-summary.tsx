"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";

export function CartSummary() {
  const { cart, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Podsumowanie</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Produkty ({cart.length})</span>
          <span>{totalPrice.toFixed(2)} zł</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Razem</span>
          <span>{totalPrice.toFixed(2)} zł</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Link className="w-full" href="/summary">
          <Button className="w-full">Przejdź do podsumowania</Button>
        </Link>

        <Button variant="outline" className="w-full" onClick={clearCart}>
          Wyczyść koszyk
        </Button>
      </CardFooter>
    </Card>
  );
}
