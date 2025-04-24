import { useContext } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/GithubContext";

function UserResults() {
  const { users, loading, searched } = useContext(GithubContext);

  if (!loading) {
    if (users.length > 0) {
      return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-10">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
    }
    if (searched && users.length === 0) {
      return (
        <div className="mt-10 text-center text-lg font-semibold text-gray-600">
          <h2>User Not Found!</h2>
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
  return null
}

export default UserResults;
