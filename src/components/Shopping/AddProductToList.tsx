import { useAtom } from "jotai";
import { Suspense } from "react";
import { Product, useSearchProduct } from "../../core/entities";
import { useCurrentShoppingListProducts } from "../../core/entities/shopping";
import { ProductList } from "../Product/ProductList";
import { ProductSearch } from "../Product/ProductSearch";
import { AddProductButton } from "./AddProductButton";

export const AddProductToList = () => {
  const [products] = useAtom(useSearchProduct);
  const [productList, addProduct] = useAtom(useCurrentShoppingListProducts);

  function handleAddProduct(quantity: number, product: Product): void {
    if (quantity <= 0)
      addProduct(productList.filter((p) => p.product.id !== product.id));
    else if (productList.find((p) => p.product.id === product.id))
      addProduct(
        productList.map((p) =>
          p.product.id === product.id ? { ...p, quantity } : p
        )
      );
    else addProduct([...productList, { product, quantity }]);
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
      <span>{JSON.stringify(productList)}</span>
    </>
  );
};
