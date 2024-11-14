import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import moment from "moment";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Header Section */}
      <div className="flex bg-[#F3F3F3] p-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-[#403F3F]">{news.author.name}</p>
            <p className="text-sm text-[#706F6F]">
              {moment(news.author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaBookmark className="text-[#706F6F] cursor-pointer" />
          <FaShareAlt className="text-[#706F6F] cursor-pointer" />
        </div>
      </div>

      {/* Title Section */}
      <h2 className="text-xl font-bold text-[#403F3F] mt-4 mb-5">
        {news.title}
      </h2>

      {/* Thumbnail Image */}
      <img
        src={news.thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-[262px] object-cover rounded-lg mb-8"
      />

      {/* Details Section */}
      <p className="text-[#706F6F] mb-3">{news.details.slice(0, 150)}...</p>
      <a href="#" className="text-[#FF8C47] font-medium">
        Read More
      </a>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-3">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <p className="font-semibold">{news.rating.number}</p>
        </div>

        {/* Views */}
        <div className="flex items-center text-[#706F6F]">
          <FaEye className="mr-1" />
          <p>{news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
