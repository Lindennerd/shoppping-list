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
  const products = await collections.product.getFullList({
    limit: 10,
    perPage: 10,
  });
  return products;
});

export const filterProduct = atom<string>("");
export const useSearchProduct = atom<Promise<Product[]>>(async (get) => {
  const search = get(filterProduct);
  if (!search || search == "" || search.length < 3) return get(useProductList);
  const productsResult = await collections.product.getList<Product>(1, 10, {
    filter: `name ~ "${search}%"`,
  });

  return productsResult.items;
});
