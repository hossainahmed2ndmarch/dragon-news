import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>
      <div className="my-6 space-y-2 *:w-full">
        <button className="btn  text-blue-500 border border-blue-500">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn text-[#403F3F] border border-[#403F3F]">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
