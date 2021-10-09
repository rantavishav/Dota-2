/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import { errorHandler } from '../../../utils';
import {
  getAllHeroesListFail,
  getAllHeroesListStart,
  getAllHeroesListSuccess,
} from '../../actions';

export function* getAllHeroesListSaga() {
  yield put(getAllHeroesListStart());
  yield errorHandler({
    endpoint: '/heroes',
    successHandler: yield function* (response) {
      yield put(getAllHeroesListSuccess(response));
    },
    failHandler: getAllHeroesListFail,
    apiType: 'get',
  });
}
