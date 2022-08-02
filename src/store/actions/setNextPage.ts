import { ActionTypes } from '../actionTypes';

export const setNextPage = ({ page = 1 }: State) => {
  const nextPage = Number(page) + 1;
  const payload = nextPage < 10 // here should be the limit check
    ? nextPage
    : page;

  return {
    type: ActionTypes.CHANGE_PAGE,
    payload,
  }
}
