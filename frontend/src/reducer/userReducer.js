const initialState = {
  user: { id: null, name: null, mail: null },
};

export { initialState };

const userReducer = (state, action) => {
  console.warn(action);
  switch (action.type) {
    case "SET_USER": {
      return { ...state, user: action.payload };
    }
    case "RESET_USER": {
      return { ...state, user: { id: null, name: null, mail: null } };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
