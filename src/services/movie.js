import _request from './_request';
import { YOUTUBE_API_URL, YOUTUBE_KEY, API_URL } from '../constants/serverConfig';

export const youtubeMovieApi = videoID => {
  const requestURL = `${YOUTUBE_API_URL}&key=${YOUTUBE_KEY}&id=${videoID}`;
  return _request.GET(requestURL);
};

export const shareMovieApi = payload => _request.POST(`${API_URL}/api/share-movie`, payload);
