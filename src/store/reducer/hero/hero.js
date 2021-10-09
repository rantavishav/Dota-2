import * as actionLabels from '../../actionLabels';

const initialState = {
  isLoading: false,
  heroesList: null,
  errorMsg: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionLabels.GET_ALL_HEROES_LIST_START:
      return { ...state, isLoading: true };
    case actionLabels.GET_ALL_HEROES_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        heroesList: payload,
      };
    case actionLabels.GET_ALL_HEROES_LIST_FAIL:
      return { ...state, isLoading: false, errorMsg: payload };
    default:
      return state;
  }
}
