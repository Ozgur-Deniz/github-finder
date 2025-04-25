import { useEffect, useContext } from "react";
import GithubContext from "../../context/GithubContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

function User() {
  const { user, getUser, loading } = useContext(GithubContext);
  const { login } = useParams();
  useEffect(() => {
    getUser(login);
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

  if (loading) {
    <Spinner />;
  }

  return (
    <div className="flex flex-col justify-start items-center gap-8">
      <Link to="/">Back To Search</Link>
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src={avatar_url}
          alt="avatar"
          className="rounded-2xl w-xs opacity-75"
        />
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="text-2xl">{name}</p>
            <button className="rounded-xl p-2 text-yellow-300 bg-green-600">
              {type}
            </button>
          </div>
          <p>{bio}</p>
          <button className="p-4">Visit Github Profile</button>
          <div className="flex flex-row justify-center items-center gap-4">
            <div>
              <p>Location</p>
              <p>{location}</p>
            </div>
            <div>
              <p>Website</p>
              <a href={`https:${blog}`} target="_blank" rel="noopener noreferrer">{blog}</a>
            </div>
            <div>
              <p>Twitter</p>
              <Link to=""></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
