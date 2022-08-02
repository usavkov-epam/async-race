import { ActionTypes } from "./actionTypes";

export const rootReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCATION: {
      return { ...state, location: action.payload }
    }
    case ActionTypes.CHANGE_PAGE: {
      return { ...state, page: action.payload }
    }
    default: return state; // default should return state!
  }
}
