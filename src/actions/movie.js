import { ADD_MOVIVES, VOTE_MOVIE_REQUEST, VOTE_MOVIE_REQUEST_SUCCESS, VOTE_MOVIE_REQUEST_FAILED, SHARE_MOVIE, SHARE_MOVIE_FAILED, RESET_SHARING_STATUS } from './types';

export const addMoviesAction = payload => ({ type: ADD_MOVIVES, payload });
export const shareMovieAction = payload => ({ type: SHARE_MOVIE, payload });
export const shareMovieFailed = () => ({ type: SHARE_MOVIE_FAILED });
export const resetSharingStatusAction = () => ({ type: RESET_SHARING_STATUS });

export const voteMovieAction = payload => ({ type: VOTE_MOVIE_REQUEST, payload });
export const voteMovieSuccess = payload => ({ type: VOTE_MOVIE_REQUEST_SUCCESS, payload });
export const voteMovieFailed = payload => ({ type: VOTE_MOVIE_REQUEST_FAILED, payload });
