import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5">
      <button className="btn bg-[#D72050] text-xl font-medium text-white rounded-none">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        className="text-lg font-semibold text-[#403F3F] space-x-10"
      >
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          provident?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          provident?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          provident?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
