import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("recipeName", { required: true })}
            placeholder="Type your recipe name"
            className="input input-bordered w-full "
          />
          {errors.recipeName && <span>Recipe Name is required</span>}
        </div>

        <div className="flex ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option>Salad</option>
              <option>Soup</option>
              <option>Pizza</option>
              <option>Dessert</option>
              <option>Drinks</option>
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
            {...register("details")}
            placeholder="type food details here..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose a file*</span>
          </label>
          <input
            type="file"
            {...register("photo")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors.photo && <span>Food Image is required</span>}
        </div>
        <input className="btn btn-accent mt-2" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
