import { ADD_MOVIVES, VOTE_MOVIE_REQUEST, VOTE_MOVIE_REQUEST_SUCCESS, VOTE_MOVIE_REQUEST_FAILED } from './types';

export const addMoviesAction = payload => ({ type: ADD_MOVIVES, payload });

export const voteMovieAction = payload => ({ type: VOTE_MOVIE_REQUEST, payload });
export const voteMovieSuccess = payload => ({ type: VOTE_MOVIE_REQUEST_SUCCESS, payload });
export const voteMovieFailed = payload => ({ type: VOTE_MOVIE_REQUEST_FAILED, payload });
