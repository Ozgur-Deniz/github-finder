import { Link } from "react-router-dom";

function UserItem({ user }) {
  const { login, avatar_url } = user;
  return (
    <div className="card shadow-lg bg-white rounded-2xl">
      <div className="flex flex-row items-center space-x-8 ">
        <div>
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="profile" className="rounded-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="opacity-50">{login}</h2>
          <Link
            className="text-opacity-40 hover:text-purple-400 transition:colors duration-500"
            to={`users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
