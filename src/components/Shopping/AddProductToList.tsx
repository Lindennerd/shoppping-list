import { useAtom } from "jotai";
import { Suspense } from "react";
import { Product, useSearchProduct } from "../../core/entities";
import { useCurrentShoppingList } from "../../core/entities/shopping";
import { ProductList } from "../Product/ProductList";
import { ProductSearch } from "../Product/ProductSearch";
import { AddProductButton } from "./AddProductButton";

export const AddProductToList = () => {
  const [products] = useAtom(useSearchProduct);
  const { addProduct, shopping } = useCurrentShoppingList();

  function handleAddProduct(quantity: number, product: Product): void {
    addProduct({ product, quantity });
  }

  return (
    <>
      <ProductSearch />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList
          products={products}
          action={(product) => (
            <AddProductButton
              onAddProduct={(quantity) => handleAddProduct(quantity, product)}
            />
          )}
        />
      </Suspense>
      <span>{JSON.stringify(shopping.what)}</span>
    </>
  );
};
