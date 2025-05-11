import { cartAtom } from "@/atoms/cartAtom";
import { calculateItemTotalPrice } from "@/lib/utils";
import { Product } from "@/types";
import { useAtom } from "jotai";

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const addToCart = (product: Product) => {
    if (cart === undefined) {
      setCart([{ ...product, quantity: 1 }]);
    } else if (!cart.find((p) => p.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (id: number) => {
    if (cart === undefined) {
      return;
    } else if (cart.find((p) => p.id === id)) {
      setCart(cart.filter((p) => p.id !== id));
    }
  };
  const increaseQuantityInCart = (id: number) => {
    if (cart === undefined) {
      return;
    } else if (cart.find((p) => p.id === id)) {
      setCart(cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
    }
  };
  const decreaseQuantityInCart = (id: number) => {
    if (cart === undefined) {
      return;
    } else if (cart.find((p) => p.id === id)) {
      setCart(
        cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p)).filter((p) => p.quantity > 0)
      );
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const getTotalPrice = () => {
    if (cart === undefined) {
      return 0;
    }
    return cart.reduce((prev, curr) => prev + calculateItemTotalPrice(curr), 0);
  };
  const getProductQuantity = (id: number) => {
    if (cart === undefined) {
      return 0;
    }
    const product = cart.find((p) => p.id === id);
    if (product) {
      return product.quantity;
    }
    return 0;
  };
  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    clearCart,
    getTotalPrice,
    getProductQuantity,
  };
}
