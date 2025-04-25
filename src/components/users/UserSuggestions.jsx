import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import { FaUser } from "react-icons/fa";

function UserSuggestions() {
  const { suggestedUsers } = useContext(GithubContext);
  return (
    <div className="max-h-[38vh] overflow-auto flex flex-col justify-center items-start gap-3 bg-white w-[700px] rounded-xl">
      {suggestedUsers.map(({ login, id }) => (
        <div
          key={id}
          className="flex flex-row justify-center items-center gap-2"
        >
          <FaUser className="text-sky-950" />
          <p>{login}</p>
        </div>
      ))}
    </div>
  );
}

export default UserSuggestions;
