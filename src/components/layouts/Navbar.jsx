import { useContext } from "react";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom"; 
import GithubContext from "../../context/GithubContext";

function Navbar() {
  const { clearUsers } = useContext(GithubContext);
  return (
    <div className="flex flex-row justify-between items-center w-full shadow-lg bg-sky-50 p-6 mb-10">
      <div className="flex flex-row justify-center items-center gap-4">
        <IoLogoGithub className="inline w-8 h-8" />
        <p className="text-xl font-bold">Github Finder</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 mr-10 font-medium">
          <Link to="/" onClick={clearUsers} className="hover:text-slate-500 transition:colors duration-500">Home</Link>
          <Link to="/about" className="hover:text-slate-500 transition:colors duration-500">About</Link>
        </div>
    </div>
  );
}

export default Navbar;
