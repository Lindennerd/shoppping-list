import PocketBase from "pocketbase";
import { Market, Product } from "./entities";
import { Shopping } from "./entities/shopping";

export const pocketbase = new PocketBase("http://127.0.0.1:8090");

export interface ValidationError {
  message: string;
  data: {
    code: string;
    message: string;
  };
}

export const collections = {
  market: pocketbase.collection<Market>("market"),
  product: pocketbase.collection<Product>("product"),
  productMarket: pocketbase.collection("productMarket"),
  shopping: pocketbase.collection<Shopping>("shopping"),
};
