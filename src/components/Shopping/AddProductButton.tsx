import { Input } from "../Form";

export interface AddProductButtonProps {
  onAddProduct: (quantity: number) => void;
}

// a component to add product to the cart by informing the quantity of products to be added
export const AddProductButton = (props: AddProductButtonProps) => {
  return (
    <Input
      placeholder="Quantidade"
      min={0}
      type="number"
      onChange={(e) => props.onAddProduct(e.target.valueAsNumber)}
    />
  );
};
