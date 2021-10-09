import * as actionLabels from '../../actionLabels';

export const getAllHeroesListSaga = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_SAGA,
  payload,
});
export const getAllHeroesListStart = () => ({
  type: actionLabels.GET_ALL_HEROES_LIST_START,
});
export const getAllHeroesListSuccess = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_SUCCESS,
  payload,
});
export const getAllHeroesListFail = payload => ({
  type: actionLabels.GET_ALL_HEROES_LIST_FAIL,
  payload,
});
