import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
