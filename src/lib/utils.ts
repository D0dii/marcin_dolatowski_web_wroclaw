import { CartItem } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateItemTotalPrice(item: CartItem) {
  return (item.price.main + item.price.fractional / 100) * item.quantity;
}
