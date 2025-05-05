import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      const userInfo = { name: data.name, email: data.email };

      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          alert("User Created Successfully");
          navigate("/");
        }
      });
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            // onSubmit={handleSubmit((data) => console.log(data))}
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
          >
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                {...register("name")}
                name="name"
                className="input"
                placeholder="name"
              />
              <label className="fieldset-label">Email</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Signup</button>
            </fieldset>
          </form>
          <p>
            <small>
              Already have an account <Link to="/login">Login</Link>
            </small>
            <SocialLogin></SocialLogin>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
