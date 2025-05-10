import { orderAtom } from "@/atoms/orderAtom";
import { Order } from "@/types";
import { useAtom } from "jotai";

export function useOrders() {
  const [orders, setOrders] = useAtom(orderAtom);
  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };
  return { orders, addOrder };
}
