import { useContext } from "react";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const foodCart = { foodId: _id, name, price, image, email: user?.email };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(foodCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Add to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
    } else {
      Swal.fire(
        "Cant't add to cart without login",
        "please login first",
        "question",
        navigate("/login", { state: { from: location } })
      );
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-orange-400 my-4 border-0 border-b-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
