import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { pocketbase } from "../pocketbase";
import { Login, RegisterModel, User } from "./user";

export * from "./user";

export const useAuth = () => {
  const navigate = useNavigate();
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
        await pocketbase
          .collection("users")
          .authWithPassword(user.email, user.password);
        navigate("/");
      } catch (error) {
        toast("An error occurred", { type: "error" });
      }
    },
    logout: () => {
      pocketbase.authStore.clear();
      navigate("/login");
    },
    auth: pocketbase.authStore.model as unknown as User,
    isLogged: pocketbase.authStore.isValid,
  };
};
