import moment from "moment";

const Header = () => {
  return (
    <div className="py-2">
      <h1 className="font-oldEnglish text-6xl text-[#444444] text-center mb-5">
        The Dragon News
      </h1>
      <p className="text-lg text-[#706F6F] text-center mb-3">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium text-[#403F3F] text-center">
        <span>{moment().format("dddd, ")}</span>
        <span className="text-[#706F6F]">
          {moment().format(" MMMM D, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
