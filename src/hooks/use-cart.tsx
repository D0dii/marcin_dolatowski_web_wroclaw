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
  const removeFromCart = (id: number) => {
    if (cart.find((p) => p.id === id)) {
      setCart((prev) => prev.filter((p) => p.id !== id));
    }
  };
  const increaseQuantityInCart = (id: number) => {
    if (cart.find((p) => p.id === id)) {
      setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
    }
  };
  const decreaseQuantityInCart = (id: number) => {
    if (cart.find((p) => p.id === id)) {
      setCart((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p)).filter((p) => p.quantity > 0)
      );
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return { cart, addToCart, removeFromCart, increaseQuantityInCart, decreaseQuantityInCart, clearCart };
}
