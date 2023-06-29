const initialState = {
  user: null,
};

export { initialState };

const userReducer = (state, action) => {
  console.warn(action);
  switch (action.type) {
    case "SET_USER": {
      return { ...state, user: action.payload };
    }
    case "RESET_USER": {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
