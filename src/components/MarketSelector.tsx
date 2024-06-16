import { useAtom } from "jotai";
import { marketListAtom } from "../core/entities";

export const MarketSelector = () => {
  const [markets] = useAtom(marketListAtom);
  return (
    <div>
      <h1>{JSON.stringify(markets)}</h1>
    </div>
  );
};
