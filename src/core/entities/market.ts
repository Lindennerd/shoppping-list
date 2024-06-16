import { atom } from "jotai";
import { collections } from "../pocketbase";

export interface Market {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  name: string;
  address: string;
  logo: string;
}

export const marketListAtom = atom<Promise<Market[]>>(async () => {
  const markets = await collections.market.getFullList();
  return markets;
});
