import { useAtom } from "jotai";
import { Suspense } from "react";
import { useSearchProduct } from "../../core/entities";
import { ProductList } from "../Product/ProductList";
import { ProductSearch } from "../Product/ProductSearch";

export const AddProductToList = () => {
  const [products] = useAtom(useSearchProduct);

  return (
    <>
      <ProductSearch />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList products={products} />
      </Suspense>
    </>
  );
};
