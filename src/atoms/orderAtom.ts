import { Order } from "@/types";
import { atomWithStorage } from "jotai/utils";

export const orderAtom = atomWithStorage<Order[] | undefined>("orders", undefined);
