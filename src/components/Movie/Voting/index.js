import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { voteMovieAction } from '../../../actions/movie';

class Voting extends React.Component {
  _voteMovie = votingValue => {
    const { videoID, voteMovie } = this.props;
    voteMovie({ videoID, votingValue });
  };

  render() {
    const { videoID, isLoggedIn, votedMovies } = this.props;
    const status = (votedMovies && votedMovies[videoID]) || undefined;

    if (!isLoggedIn) return null;

    return (
      <div className="voting-actions">
        {(status === undefined || status === 1) && (
          <button
            className="button like"
            disabled={status === 1}
            onClick={() => {
              this._voteMovie(1);
            }}
          >
            <i className={`icon like${status === 1 ? '-active' : ''}-icon`} />
          </button>
        )}
        {(status === undefined || status === -1) && (
          <button
            className="button dislike"
            disabled={status === -1}
            onClick={() => {
              this._voteMovie(-1);
            }}
          >
            <i className={`icon dislike${status === -1 ? '-active' : ''}-icon`} />
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn, votedMovies: state.auth.votedMovies });

export default connect(
  mapStateToProps,
  { voteMovie: voteMovieAction }
)(Voting);
