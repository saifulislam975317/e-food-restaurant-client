import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return (
      <h1 className="text-red-600 text-center">Please wait. Loading...</h1>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
