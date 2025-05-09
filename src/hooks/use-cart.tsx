import { cartAtom } from "@/atoms/cartAtom";
import { Product } from "@/types";
import { useAtom } from "jotai";

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const addToCart = (product: Product) => {
    if (!cart.find((p) => p.id === product.id)) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (product: Product) => {
    if (cart.find((p) => p.id === product.id)) {
      setCart((prev) => prev.filter((p) => p.id !== product.id));
    }
  };
  return { cart, addToCart, removeFromCart };
}
