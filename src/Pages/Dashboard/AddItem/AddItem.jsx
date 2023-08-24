import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleSection from "../../Shared/TitleSection/TitleSection";

const imageBB_api = import.meta.env.VITE_imageBB_api;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imageBB_url = `https://api.imgbb.com/1/upload?key=${imageBB_api}`;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`${imageBB_url}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imageURL = imageData.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imageURL,
          };
          fetch("http://localhost:5000/menu", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your food item have been added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div className="w-full px-12">
      <TitleSection
        heading={"Add an Item"}
        subHeading={"What's new?"}
      ></TitleSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type your recipe name"
            className="input input-bordered w-full "
          />
          {errors.name && <span>Recipe Name is required</span>}
        </div>

        <div className="flex ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name*</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick One"
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>salad</option>
              <option>soup</option>
              <option>pizza</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
            {errors.category && <span>category name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs ml-2">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type product price here..."
              className="input input-bordered w-full max-w-xs"
            />
            {errors.price && <span>Price is required</span>}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none h-24"
            {...register("recipe")}
            placeholder="type food details here..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose a file*</span>
          </label>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors.image && <span>Food Image is required</span>}
        </div>
        <input className="btn btn-accent mt-2" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
