import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import { loginSaga, authenticationValidatorSaga } from './auth/auth';
import { getAllHeroesListSaga } from './hero/hero';
import { getLatestNewsSaga } from './news/news';

export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
  ]);
}

export function* watchNews() {
  yield all([takeLatest(actionLabels.GET_LATEST_NEWS_SAGA, getLatestNewsSaga)]);
}

export function* watchHero() {
  yield all([takeLatest(actionLabels.GET_ALL_HEROES_LIST_SAGA, getAllHeroesListSaga)]);
}
