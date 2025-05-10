"use client";
import { useOrders } from "@/hooks/use-orders";
import { useParams } from "next/navigation";

export default function ThankYou() {
  const params = useParams<{ id: string }>();
  const { orders } = useOrders();
  console.log(orders.find((o) => o.id === params.id));
  return <div>Thank you</div>;
}
