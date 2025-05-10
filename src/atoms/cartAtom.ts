import { CartItem } from "@/types";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const baseStorage = createJSONStorage<CartItem[] | [] | undefined>(() => sessionStorage);

const storage = {
  ...baseStorage,
  getItem: (key: string) => baseStorage.getItem(key, []),
};

export const cartAtom = atomWithStorage<CartItem[] | undefined>("cart", undefined, storage);
