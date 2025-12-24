import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

// initial state:
const initialState = {
  count: 0,
};

//based onthe action: logic:

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      if (state.count <= 0) {
        return state;
      }
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
}

export default counterReducer;
