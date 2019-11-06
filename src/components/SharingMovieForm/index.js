import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { getMovieID } from '../../utils';
import { shareMovieAction, resetSharingStatusAction } from '../../actions';
import Loader from '../Loader';
import { SHARE_MOVIE, SHARE_MOVIE_SUCCESS, SHARE_MOVIE_FAILED } from '../../actions/types';

class SharingMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoURL: '', videoID: undefined, message: undefined };
  }

  componentWillReceiveProps(nextProps) {
    const { sharingStatus, resetSharingStatus } = this.props;
    if (sharingStatus === SHARE_MOVIE) {
      let newState;
      if (nextProps.sharingStatus === SHARE_MOVIE_SUCCESS) {
        newState = {
          message: { content: 'Shared movie successful.', status: 'success' },
          videoURL: '',
          videoID: ''
        };
      } else if (nextProps.sharingStatus === SHARE_MOVIE_FAILED) {
        newState = { message: { content: 'Shared movie failed.', status: 'fail' } };
      }
      this.setState(newState, () => {
        setTimeout(resetSharingStatus, 3000);
      });
    }

    if (sharingStatus && nextProps.sharingStatus === undefined) {
      this.setState({ message: undefined });
    }
  }

  _onFormSubmit = event => {
    event.preventDefault();
    const { shareMovie, author } = this.props;
    const { videoID } = this.state;
    shareMovie({ videoID, author });
  };

  _onURLChange = event => {
    const inputValue = event.target.value;
    const videoID = getMovieID(inputValue);
    this.setState({ videoURL: inputValue, videoID });
  };

  render() {
    const { videoURL, videoID, message } = this.state;
    const { sharingStatus } = this.props;
    return (
      <div className="sharing-movie-form">
        <h3 className="form-title">Share a Youtube movie</h3>

        <form onSubmit={this._onFormSubmit}>
          <div className="input">
            <label className="input-label" htmlFor="videoUrl">
              Youtube URL <input id="videoUrl" className="input-field" value={videoURL} onChange={this._onURLChange} />
            </label>
            {message && <div className={`sharing-result message-${message.status}`}>{message.content}</div>}
          </div>
          <div className="button-wrapper">
            <button className="button primary-button" disabled={videoID === undefined || sharingStatus === SHARE_MOVIE}>
              <span>Share</span>
              {sharingStatus === SHARE_MOVIE && (
                <span className="loader-wrapper">
                  <Loader />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ author: state.auth.email, sharingStatus: state.movies.sharingStatus });

export default connect(
  mapStateToProps,
  { shareMovie: shareMovieAction, resetSharingStatus: resetSharingStatusAction }
)(SharingMovieForm);
