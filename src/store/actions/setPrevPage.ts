import { ActionTypes } from '../actionTypes';

export const setPrevPage = ({ page = 2 }: State) => {
  const prevPage = Number(page) - 1;
  const payload = prevPage < 1 ? 1 : prevPage;

  return {
    type: ActionTypes.CHANGE_PAGE,
    payload,
  }
}
