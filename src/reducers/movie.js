import { ADD_MOVIVES, SHARE_MOVIE_FAILED, SHARE_MOVIE, RESET_SHARING_STATUS } from '../actions/types';

const _exampleMovie = {
  videoID: 'ua3fq-yw6cY',
  title: 'Amazing Animals With Unusual Superpowers - Wildlife Documentary HD',
  description:
    'Animals are multicellular, eukaryotic organisms of the kingdom Animalia. The animal kingdom emerged as a basal clade within Apoikozoa as a sister of the choanoflagellates. Sponges are the most basal clade of animals. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance. Animals are multicellular, eukaryotic organisms of the kingdom Animalia. The animal kingdom emerged as a basal clade within Apoikozoa as a sister of the choanoflagellates. Sponges are the most basal clade of animals. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance.',
  author: 'test@gmail.com',
  votingStatus: { like: 10, dislike: 100 }
};
const initialState = {
  list: [_exampleMovie],
  sharingStatus: undefined
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MOVIVES:
      return { ...state, list: [...payload.movies, ...state.list], sharingStatus: payload.sharingStatus };

    case SHARE_MOVIE:
      return { ...state, sharingStatus: SHARE_MOVIE };

    case SHARE_MOVIE_FAILED:
      return { ...state, sharingStatus: SHARE_MOVIE_FAILED };

    case RESET_SHARING_STATUS:
      return { ...state, sharingStatus: undefined };

    default:
      return state;
  }
};
