import { call, put, takeLatest } from 'redux-saga/effects';
import { SHARE_MOVIE, SHARE_MOVIE_SUCCESS, VOTE_MOVIE_REQUEST } from '../actions/types';
import { youtubeMovieApi, shareMovieApi, withoutAPIServer, voteMovieApi } from '../services';
import { addMoviesAction, shareMovieFailed, voteMovieSuccess, voteMovieFailed } from '../actions';

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

function* voteMovieSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(voteMovieApi, payload);

    if (!response.code || withoutAPIServer) {
      yield put(voteMovieSuccess(payload));
    } else {
      yield put(voteMovieFailed());
    }
  } catch (error) {
    console.log('Has an error with "voteMovieSaga".', error);
  }
}

function* watchMovieSaga() {
  yield takeLatest(SHARE_MOVIE, shareMovieSaga);
  yield takeLatest(VOTE_MOVIE_REQUEST, voteMovieSaga);
}

export default [watchMovieSaga];
