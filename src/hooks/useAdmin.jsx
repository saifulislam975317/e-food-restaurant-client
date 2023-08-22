import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin?email=${user?.eamil}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [data, adminLoading];
};

export default useAdmin;
