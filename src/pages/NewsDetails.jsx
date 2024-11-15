import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-components/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const newsDetails = data.data[0];
  console.log(newsDetails);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto my-12 grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h2 className="mb-5 text-xl font-semibold text-[#403F3F]">
            Dragon News
          </h2>
          <div className="card p-7 bg-base-100 shadow-xl">
            <figure>
              <img
                src={newsDetails?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-[#403F3F]">
                {newsDetails?.title}
              </h2>
              <p className="text-[#706F6F]">{newsDetails?.details}</p>
              <div className="card-actions mt-8">
                <Link
                  to={`/category/${newsDetails?.category_id}`}
                  className="btn rounded-none text-white text-xl font-medium bg-[#D72050]"
                >
                  <FaArrowLeftLong />
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
