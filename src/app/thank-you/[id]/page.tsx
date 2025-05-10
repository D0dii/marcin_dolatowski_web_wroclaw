"use client";
import { SummaryItem } from "@/components/summary-item";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useOrders } from "@/hooks/use-orders";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ThankYou() {
  const params = useParams<{ id: string }>();
  const { getOrder } = useOrders();
  const order = getOrder(params.id);
  if (!order) {
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
              <span>{order.totalPrice.toFixed(2)} zł</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/">Kontynuuj zakupy</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
