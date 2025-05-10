"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { SummaryItem } from "@/components/summary-item";
import { Order } from "@/types";
import { useOrders } from "@/hooks/use-orders";
import { EmptyCart } from "@/components/empty-cart";
import { useRouter } from "next/navigation";
import { formatCurrencyZloty } from "@/lib/utils";

export default function SummaryPage() {
  const router = useRouter();
  const { cart, clearCart, getTotalPrice } = useCart();
  const { addOrder } = useOrders();
  const total = getTotalPrice();

  const handlePlaceOrer = () => {
    const date = new Date();
    const newOrderId = crypto.randomUUID();
    const items = cart === undefined ? [] : [...cart];
    const newOrder = {
      id: newOrderId,
      date: date.toISOString(),
      totalPrice: total,
      items: items,
    } satisfies Order;
    setTimeout(() => {
      clearCart();
    }, 1000);
    addOrder(newOrder);
    router.push(`/thank-you/${newOrderId}`);
  };
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
    <div className="max-w-2xl mt-12 mx-auto">
      <div className="mb-8">
        <Link href="/cart" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Wróć do koszyka
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Podsumowanie zamówienia</CardTitle>
          <CardDescription>Sprawdź swoje produkty przed dokonaniem zakupu</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-0">
            {cart.map((item) => (
              <SummaryItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Razem</span>
              <span>{formatCurrencyZloty(total)}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" size="lg" onClick={handlePlaceOrer}>
            Złóż Zamówienie
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link href="/cart">Wróć do koszyka</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
