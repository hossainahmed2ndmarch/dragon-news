import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LogIn = () => {
  const { userLogIn, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-2xl p-[76px] shrink-0 rounded-none">
        <h2 className="text-4xl font-semibold text-[#403F3F] text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3] rounded-none border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-[#F3F3F3] rounded-none border-none"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-[#403F3F] font-semibold link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral bg-[#403F3F] rounded-none text-xl font-semibold">
              Login
            </button>
          </div>
        </form>
        <p className="font-semibold text-[#706F6F] text-center">
          Don’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-[#F75B5F]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
