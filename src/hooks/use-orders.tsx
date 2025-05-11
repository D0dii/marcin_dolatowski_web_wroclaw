import { orderAtom } from "@/atoms/orderAtom";
import { Order } from "@/types";
import { useAtom } from "jotai";

export function useOrders() {
  const [orders, setOrders] = useAtom(orderAtom);
  const addOrder = (order: Order) => {
    if (orders === undefined) {
      setOrders([order]);
      return;
    }
    setOrders([...orders, order]);
  };
  const getLatestOrder = () => {
    if (orders === undefined) {
      return null;
    }
    const potentialOrder = [...orders].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
    if (potentialOrder) {
      return potentialOrder;
    }
    return null;
  };
  return { orders, addOrder, getLatestOrder };
}
