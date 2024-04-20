import { takeLatest, all, call, put } from 'typed-redux-saga';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSucces,
  fetchCategoriesFailed,
} from './categories.actions';

import { CATEGORIES_ACTION_TYPE } from './categories.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCollectionAndDocuments);
    yield* put(fetchCategoriesSucces(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
