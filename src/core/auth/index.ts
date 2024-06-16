import { atom } from "jotai";
import { AuthModel } from "pocketbase";
import { pocketbase } from "../pocketbase";
import { RegisterModel, User } from "./user";

export * from "./user";
export const useAuth = () => {
  return {
    register: async (user: RegisterModel) => {
      await pocketbase.collection("users").create(user);
    },
    login: async (user: User) => {
      try {
        await pocketbase
          .collection("users")
          .authWithPassword(user.email, user.password);
      } catch (error) {
        //todo: create a better error handling
        console.error("auth", error);
      }
    },
    logout: () => {
      pocketbase.authStore.clear();
    },
    user: () => {
      return atom<AuthModel | null>(async () => {
        return pocketbase.authStore.model;
      });
    },
  };
};
