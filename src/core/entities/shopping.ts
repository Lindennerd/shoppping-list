import { atom } from "jotai";
import { collections } from "../pocketbase";
import { Product } from "./product";

export interface Shopping {
  id: string;
  when: string;
  who: string;
  what: ShoppingProduct[];
  total: number;
  additional_fee: number;
}

export interface ShoppingProduct {
  product: Product;
  quantity: number;
}

export const useShoppingList = atom<Promise<Shopping[]>>(async () => {
  const shoppings = await collections.shopping.getFullList();
  return shoppings;
});

export const useCurrentShoppingListProducts = atom<ShoppingProduct[]>([]);
