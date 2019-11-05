import { ADD_MOVIVES } from '../actions/types';

const _exampleMovie = {
  videoID: 'ua3fq-yw6cY',
  title: 'Amazing Animals With Unusual Superpowers - Wildlife Documentary HD',
  description:
    'Animals are multicellular, eukaryotic organisms of the kingdom Animalia. The animal kingdom emerged as a basal clade within Apoikozoa as a sister of the choanoflagellates. Sponges are the most basal clade of animals. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance. Animals are multicellular, eukaryotic organisms of the kingdom Animalia. The animal kingdom emerged as a basal clade within Apoikozoa as a sister of the choanoflagellates. Sponges are the most basal clade of animals. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance.',
  author: 'test@gmail.com',
  votingStatus: { like: 10, dislike: 100 }
};
const initialState = [_exampleMovie, _exampleMovie, _exampleMovie, _exampleMovie, _exampleMovie];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MOVIVES:
      return [...payload, ...state];

    default:
      return state;
  }
};
