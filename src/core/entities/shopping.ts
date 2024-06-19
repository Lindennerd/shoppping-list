import { atom, useAtom } from "jotai";
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
const shoppingList = atom<Shopping>({
  id: "",
  when: "",
  who: "",
  what: [],
  total: 0,
  additional_fee: 0,
});

export const useCurrentShoppingList = () => {
  const [shopping, setShopping] = useAtom(shoppingList);

  return {
    shopping,
    addProduct: (product: ShoppingProduct) => {
      if (product.quantity <= 0)
        setShopping({
          ...shopping,
          what: shopping.what.filter(
            (p) => p.product.id !== product.product.id
          ),
        });
      else if (shopping.what.find((p) => p.product.id === product.product.id))
        setShopping({
          ...shopping,
          what: shopping.what.map((p) =>
            p.product.id === product.product.id ? product : p
          ),
        });
      else
        setShopping({
          ...shopping,
          what: [...shopping.what, product],
        });
    },
  };
};
