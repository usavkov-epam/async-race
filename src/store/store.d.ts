interface Action {
  type: string,
  payload?: any, // actually it can be any, but your task does not allow "any"
}

type Reducer = (state: State, action: Action) => State;

interface State {
  [key?: string]: string | number | boolean | Array<string | number | boolean> | null, // etc.
}

interface Store {
  dispatch: (action: Action) => void;
  subscribe: (callback: any) => void;
  getState: () => State;
}
