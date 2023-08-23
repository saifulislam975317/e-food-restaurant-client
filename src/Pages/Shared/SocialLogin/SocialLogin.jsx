import { useContext } from "react";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignUp().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.acknowledged) {
            navigate(from, { replace: true });
          }

          if (data.acknowledged) {
            console.log("profile updated");
            navigate(from, { replace: true });
          }
        });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle  btn-outline w-full my-4"
      >
        <FaGoogle className="font-bold text-xl"></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
