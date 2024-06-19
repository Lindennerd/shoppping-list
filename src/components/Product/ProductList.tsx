import { Product } from "../../core/entities";

export interface ProductListPrpos {
  products: Product[];
}

export const ProductList = (props: ProductListPrpos) => {
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
        </div>
      ))}
    </div>
  );
};
