import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <>
      <Helmet>
        <title>E-Res | Home</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must be Uppercase,lowercase,number and special
                    characters
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">signup</button>
              </div>
            </form>
            <p className="p-10">
              Already have an account?{" "}
              <Link className="ml-2" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
