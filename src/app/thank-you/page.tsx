"use client";
import { SummaryItem } from "@/components/summary-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useOrders } from "@/hooks/use-orders";
import { formatCurrencyZloty } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  const { orders, getLatestOrder } = useOrders();
  const order = getLatestOrder();
  if (orders === undefined) {
    return (
      <div className="flex items-center justify-center mt-64">
        <Loader2 className="animate-spin" size={56} />
      </div>
    );
  }
  if (order === null) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className="max-w-2xl mt-12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Zamówienie złożone pomyślnie!</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Zamówienie {order.id}</CardTitle>
          <CardDescription>Oto twoje zakupione produkty</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-0">
            {order.items.map((item) => (
              <SummaryItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Razem</span>
              <span>{formatCurrencyZloty(order.totalPrice)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center">
        <Button asChild className="mt-6 w-[350px]">
          <Link href="/">Przejdź do strony głównej</Link>
        </Button>
      </div>
    </div>
  );
}
