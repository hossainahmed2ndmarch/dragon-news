import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News Home</h2>
      <p className="text-[#9F9F9F] text-sm">
        {news.length} News found on this page
      </p>
      <div className="mt-5 grid grid-cols-1 gap-8">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
