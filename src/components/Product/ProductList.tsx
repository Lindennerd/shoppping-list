import { Product } from "../../core/entities";

export interface ProductListPrpos {
  products: Product[];
  action?: (product: Product) => React.ReactNode;
}

export const ProductList = (props: ProductListPrpos) => {
  return (
    <div className="flex flex-col gap-2">
      {props.products.map((product) => (
        <div key={product.id} className="p-2 border flex flex-row gap-4">
          {props.action && props.action(product)}
          <span>{product.name}</span>
          <span>{product.brand}</span>
        </div>
      ))}
    </div>
  );
};
