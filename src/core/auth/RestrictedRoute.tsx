import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from ".";

export const RestrictedRoute = (props: { children: React.ReactNode }) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return <>{props.children}</>;
};
