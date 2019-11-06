import { call, put, takeLatest } from 'redux-saga/effects';
import { SHARE_MOVIE, SHARE_MOVIE_SUCCESS } from '../actions/types';
import { youtubeMovieApi, shareMovieApi, withoutAPIServer } from '../services';
import { addMoviesAction, shareMovieFailed } from '../actions';

function* shareMovieSaga(action) {
  try {
    const { videoID, author } = action.payload;

    // call the Youtube API to get video info
    const ytResponse = yield call(youtubeMovieApi, videoID);

    if (ytResponse && ytResponse.items && ytResponse.items.length === 1) {
      const { title, description } = ytResponse.items[0].snippet;
      let movieInfo = { title, description, videoID, author };
      const response = yield call(shareMovieApi, movieInfo);

      if (!response.code || withoutAPIServer) {
        movieInfo = { ...movieInfo, votingStatus: { like: 0, dislike: 0 } };
        yield put(addMoviesAction({ movies: [movieInfo], sharingStatus: SHARE_MOVIE_SUCCESS }));
      } else {
        yield put(shareMovieFailed());
      }
    }
  } catch (err) {
    console.log('Has an error with "shareMovieSaga".', err);
  }
}

function* watchMovieSaga() {
  yield takeLatest(SHARE_MOVIE, shareMovieSaga);
}

export default [watchMovieSaga];
