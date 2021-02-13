let initialState = {
  user: "",
  email: "",
  password: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "ADD_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
