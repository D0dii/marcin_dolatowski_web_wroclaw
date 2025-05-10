import { CartItem } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateItemTotalPrice(item: CartItem) {
  return (item.price.main + item.price.fractional / 100) * item.quantity;
}

export function formatPrice(price: { main: number; fractional: number }) {
  return `${price.main}.${price.fractional.toString().padStart(2, "0")} zł`;
}

export function formatCurrencyZloty(price: number) {
  return `${price.toFixed(2)} zł`;
}
