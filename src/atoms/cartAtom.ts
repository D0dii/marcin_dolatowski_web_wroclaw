import { CartItem } from "@/types";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage<CartItem[] | undefined>("cart", undefined);
