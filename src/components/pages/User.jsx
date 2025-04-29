import { useEffect, useContext } from "react";
import GithubContext from "../../context/GithubContext";
import UserRepos from "../users/UserRepos";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import { FaUsers } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { HiInboxStack } from "react-icons/hi2";
import { SiGit } from "react-icons/si";

function User() {
  const { user, userRepos, getUser, getRepos, loading } =
    useContext(GithubContext);
  const { login } = useParams();
  useEffect(() => {
    getUser(login);
    getRepos(login);
  }, [login]);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const getFullURL = (url) => {
    try {
      const fullURL = url.startsWith("http") ? url : `https://www.${url}`;
      new URL(fullURL);
      return fullURL;
    } catch (err) {
      return null;
    }
  };
  const fullURL = getFullURL(blog);

  if (loading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col justify-center items-start gap-8">
      <Link to="/">Back To Search</Link>
      <div className="flex flex-row justify-center items-center gap-12">
        <div className="relative">
          <img
            src={avatar_url}
            alt="avatar"
            className="rounded-2xl w-xs opacity-75 shadow-lg"
          />
          <div className="absolute inset-x-0 bottom-0 text-center bg-slate-200">
            <p className="font-medium text-blue-950 ">{name}</p>
            <p>{`@${login}`}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="text-2xl">{name}</p>
            <button className="rounded-xl py-1 px-3 bg-blue-500 shadow-xl">
              {type}
            </button>
            {hireable && (
              <button className="rounded-xl py-1 px-3 bg-green-400 shadow-xl">
                Hireable
              </button>
            )}
          </div>
          <p>{bio}</p>
          <button className="p-4 border-3 border-slate-900 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-colors duration-800 ease-in-out shadow-xl">
            VISIT GITHUB PROFILE
          </button>
          <div className="flex flex-row justify-center items-center gap-4 bg-white px-8 py-4 rounded-md">
            <div className="text-center">
              <p>Location</p>
              {location ? (
                <p className="font-medium text-lg">{location}</p>
              ) : (
                <p className="font-medium text-lg">Unpecified</p>
              )}
            </div>
            <hr className="w-[45px] h-[0px] rotate-90 border border-slate-200" />
            <div>
              <p>Website</p>
              {fullURL ? (
                <a
                  className="font-medium text-lg cursor-pointer hover:text-blue-500 transition-colors duration-500"
                  href={`${fullURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${name}'s Website`}
                </a>
              ) : (
                <p className="font-medium text-lg">Unspecified</p>
              )}
            </div>
            <hr className="w-[45px] h-[0px] rotate-90 border border-slate-200" />
            <div>
              <p>Twitter</p>
              {twitter_username ? (
                <a
                  className="font-medium text-lg cursor-pointer hover:text-blue-500 transition-colors duration-400"
                  href={`https:x.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {twitter_username}
                </a>
              ) : (
                <p className="font-medium text-lg">Unspecified</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 bg-white p-10 shadow-lg rounded-2xl">
        <div className="flex flex-row justify-center items-center gap-6">
          <FaUsers className="text-6xl text-blue-900" />
          <div className="text-center">
            <p>Followers</p>
            <p className="font-bold text-2xl">{followers}</p>
          </div>
        </div>
        <hr className="w-[45px] h-[0px] rotate-90 border border-slate-200" />
        <div className="flex flex-row justify-center items-center gap-6 p-10">
          <HiUsers className="text-6xl text-blue-900" />
          <div className="text-center">
            <p>Following</p>
            <p className="font-bold text-2xl">{following}</p>
          </div>
        </div>
        <hr className="w-[45px] h-[0px] rotate-90 border border-slate-200" />
        <div className="flex flex-row justify-center items-center gap-6 p-10">
          <HiInboxStack className="text-6xl text-blue-900" />
          <div className="text-center">
            <p>Public Repos</p>
            <p className="font-bold text-2xl">{public_repos}</p>
          </div>
        </div>
        <hr className="w-[45px] h-[0px] rotate-90 border border-slate-200" />
        <div className="flex flex-row justify-center items-center gap-6 p-10">
          <SiGit className="text-6xl text-blue-900" />
          <div className="text-center">
            <p>Public Gists</p>
            <p className="font-bold text-2xl">{public_gists}</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-medium">Latest Repositories</h1>
      <div className="flex flex-col justify-center items-center gap-8">
        {userRepos ? (
          <UserRepos />
        ) : (
          <p>{name} does not have any repositories. </p>
        )}
      </div>
    </div>
  );
}

export default User;
