import { atom, useAtom } from "jotai";
import { toast } from "react-toastify";
import { pocketbase } from "../pocketbase";
import { Login, RegisterModel, User } from "./user";

export * from "./user";

const authAtom = atom<User | null>(null);

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  return {
    register: async (user: RegisterModel) => {
      try {
        if (user.password !== user.passwordConfirm) {
          toast("Passwords do not match", { type: "error" });
          return;
        }

        if (user.password.length < 8) {
          toast("Password must be at least 8 characters", {
            type: "error",
          });
          return;
        }

        await pocketbase.collection("users").create(user);
      } catch (error) {
        toast("An error occurred", { type: "error" });
      }
    },
    login: async (user: Login) => {
      try {
        const authResponse = await pocketbase
          .collection("users")
          .authWithPassword(user.email, user.password);
        setAuth(authResponse.record as unknown as User);
      } catch (error) {
        toast("An error occurred", { type: "error" });
      }
    },
    logout: () => {
      pocketbase.authStore.clear();
    },
    auth: auth,
    isLogged: pocketbase.authStore.isValid,
  };
};
