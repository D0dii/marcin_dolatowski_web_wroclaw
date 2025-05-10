import { orderAtom } from "@/atoms/orderAtom";
import { Order } from "@/types";
import { useAtom } from "jotai";

export function useOrders() {
  const [orders, setOrders] = useAtom(orderAtom);
  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };
  const getOrder = (orderId: string) => {
    const potentialOrder = orders.find((o) => o.id === orderId);
    if (potentialOrder) {
      return potentialOrder;
    }
    return null;
  };
  return { orders, addOrder, getOrder };
}
