import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
      );
      const data = await res.json();
      setCategories(data.data.news_category);
    };
    loadCategories();
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">All Category</h2>
      <div className="mt-5 grid grid-cols-4 md:grid-cols-1 gap-2">
        {categories.map((category) => (
          <button
            className="btn text-xl font-semibold text-[#9F9F9F]"
            key={category.category_id}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
