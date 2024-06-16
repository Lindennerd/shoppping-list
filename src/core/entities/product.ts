import { atom } from "jotai";
import { collections } from "../pocketbase";

export interface Product {
  id: string;
  created: string;
  updated: string;
  name: string;
  brand: string;
}

export const useProductList = atom<Promise<Product[]>>(async () => {
  const products = await collections.product.getFullList();
  return products;
});
