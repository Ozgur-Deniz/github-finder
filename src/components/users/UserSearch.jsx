import { useState, useContext, useEffect, useCallback } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Toaster, toast } from "sonner";
import { MdErrorOutline } from "react-icons/md";
import GithubContext from "../../context/GithubContext";
import debounce from "lodash/debounce";
import UserSuggestions from "./UserSuggestions";

function UserSearch() {
  const [text, setText] = useState("");
  const {
    suggestedUsers,
    getUsernames,
    users,
    searchUsers,
    clearUsers,
    clearSuggestedUsers,
  } = useContext(GithubContext);

  const debouncedSearch = useCallback(
    debounce((text) => {
      getUsernames(text);
    }, 500)
  );

  const handleChange = (e) => {
    clearSuggestedUsers();
    setText(e.target.value);
    if (text.length >= 3) {
      debouncedSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      toast.error("Please typing something!", {
        duration: 3000,
        icon: <MdErrorOutline className="text-2xl mr-5 text-red-800" />,
        style: {
          fontSize: "15px",
        },
      });
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Toaster position="top-right" />
      <form className="flex flex-row justify-center items-center gap-8">
        <div className="flex flex-row justify-evenly items-center gap-3 bg-white w-[700px] h-[60px] rounded-xl">
          <IoSearchSharp className="text-3xl text-sky-950" />
          <input
            type="text"
            placeholder="Search a github user"
            className="w-lg py-4 focus:outline-none font-medium tracking-[1.2px] text-lg"
            onChange={handleChange}
            value={text}
          />
          <button
            type="submit"
            className="rounded-xl bg-teal-600 p-3 text-white tracking-[1px] font-medium hover:bg-teal-800 transition-colors duration-800 cursor-pointer"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        {users?.length > 0 && (
          <div
            className="flex flex-row justify-center items-center gap-2 bg-[#fafafa] p-3 cursor-pointer font-medium hover:bg-slate-200 transition-colors duration-800"
            onClick={clearUsers}
          >
            <RxCross2 />
            <p>CLEAR</p>
          </div>
        )}
      </form>
      {suggestedUsers?.length > 0 && <UserSuggestions />}
    </div>
  );
}

export default UserSearch;
