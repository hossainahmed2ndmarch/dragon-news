import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-[#403F3F]">Find Us On</h2>
      <div className="join flex join-vertical mt-5 *:bg-base-100">
        <button className="btn justify-start join-item font-medium text-[#706F6F]">
          <FaFacebookF className="text-[#3B599C]"></FaFacebookF> Facebook
        </button>
        <button className="btn justify-start join-item font-medium text-[#706F6F]">
          <FaTwitter className="text-[#58A7DE]"></FaTwitter> Twitter
        </button>
        <button className="btn justify-start join-item font-medium text-[#706F6F]">
          <FaInstagram className="text-[#D82D7E] "></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
