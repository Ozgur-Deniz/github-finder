const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERNAMES":
      return {
        ...state,
        suggestedUsers: action.payload
      }
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        searched: true,
        loading: false,
        suggestedUsers: []
      };
      case "GET_USER":
        return {
          loading: false,
          user: action.payload
        }
        case "GET_REPOS": 
        return {
          ...state,
          loading: false,
          userRepos: action.payload
        }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        searched: false,
        suggestedUsers: []
      };
      case "CLEAR_SUGUSERS":
      return {
        ...state,
        suggestedUsers: []
      };
    default:
      return state;
  }
};

export default githubReducer;
