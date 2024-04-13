import { setLoading } from './loadingSlice';

export const setLoadingState = (isLoading) => (dispatch) => {
  dispatch(setLoading(isLoading));
};