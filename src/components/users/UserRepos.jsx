import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import { FaLink, FaEye } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

function UserRepos() {
  const { userRepos } = useContext(GithubContext);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {userRepos.length > 0 &&
        userRepos.map((repo) => {
            const { id, name, watchers, stargazers_count, forks_count, open_issues, description } = repo;
          return (
            <div className="flex flex-col justify-center items-start gap-8 rounded-3xl shadow-xl p-8 bg-slate-200" key={id}>
              <div className="flex flex-row justify-center items-center gap-2">
                <FaLink className="text-3xl" />
                <a href="" className="text-2xl font-medium">{name}</a>
              </div>
              {description ? <p className="text-xl w-[800px] text-left text-slate-700 ">{description}</p> : <p className="text-xl">No description</p> }
              <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex flex-row justify-center items-center gap-4 py-2 px-3 rounded-2xl bg-blue-800">
                  <FaEye className="text-xl" />
                  <p className="text-lg w-[60px]">{watchers}</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-4 py-2 px-3 rounded-2xl bg-green-500">
                  <FaRegStar className="text-xl" />
                  <p className="text-lg w-[60px]">{stargazers_count}</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-4 py-2 px-3 rounded-2xl bg-pink-400">
                  <IoInformation className="text-xl" />
                  <p className="text-lg w-[60px]">{open_issues}</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-4 py-2 px-3 rounded-2xl bg-purple-600">
                  <PiForkKnifeFill className="text-xl" />
                  <p className="text-lg w-[60px]">{forks_count}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UserRepos;
