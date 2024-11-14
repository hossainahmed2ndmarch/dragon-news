import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <header className="my-8 w-11/12 mx-auto">
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
