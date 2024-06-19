import { useAtom } from "jotai";
import { startTransition } from "react";
import { filterProduct } from "../../core/entities";
import { Input } from "../Form";

export const ProductSearch = () => {
  const [filter, setFilterProduct] = useAtom(filterProduct);

  function setFilter(text: string) {
    startTransition(() => setFilterProduct(text));
  }

  return (
    <div className="flex flex-col">
      <Input
        placeholder="Search for a product"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
