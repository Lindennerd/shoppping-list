import { atom } from "jotai";
import { collections } from "../pocketbase";

export interface Shopping {
  id: string;
  created: string;
  updated: string;
  marketId: string;
  productId: string;
  price: number;
  quantity: number;
}

export const useShoppingList = atom<Promise<Shopping[]>>(async () => {
  const shoppings = await collections.shopping.getFullList();
  return shoppings;
});
