import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  const token = localStorage.getItem("access-token");

  useEffect(() => {
    fetch(`http://localhost:5000/users/admin/${user?.email}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user?.email, token]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
