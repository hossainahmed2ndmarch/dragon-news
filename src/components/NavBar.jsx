import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{ user?.email}</div>
      <div className="nav text-lg text-[#706F6F] space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {user && user.email ? (
          <button
            onClick={logOut}
            className="btn bg-[#403F3F] rounded-none text-white text-xl font-semibold"
          >
            Log-Out
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn bg-[#403F3F] rounded-none text-white text-xl font-semibold"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
