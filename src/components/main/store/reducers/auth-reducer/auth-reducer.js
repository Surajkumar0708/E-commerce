const initialState = {
  isLogin: true,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "logout":
      return { ...state, isLogin: payload };
    default:
      return state;
  }
};
