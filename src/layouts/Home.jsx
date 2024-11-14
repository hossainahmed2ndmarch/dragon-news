import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="my-8 w-11/12 mx-auto bg-[#F3F3F3] p-4">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="mb-16 w-11/12 mx-auto">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto mb-8 grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default Home;
