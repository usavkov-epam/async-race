import { ActionTypes } from "./actionTypes";

export function createStrore(rootReducer: Reducer, initialState: State) {
  let state: State = rootReducer(initialState, { type: ActionTypes.__INIT__ });
  const subscribers: any[] = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(sub => sub(state));
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  } as Store;
};
