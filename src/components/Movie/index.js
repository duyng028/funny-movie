import React, { Component } from 'react';
import { connect } from 'react-redux';
import Voting from './Voting';
import './styles.scss';

export default class Movie extends Component {
  render() {
    const { data } = this.props;
    const { videoID, title, description, author, votingStatus } = data;
    return (
      <div className="movie-item">
        <div className="movie">
          <iframe
            className="iframe"
            title="Demo Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoID}?rel=0&autoplay=0&mute=1`}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <div className="meta-data">
            <div className="summary">
              <p className="shared-by">Shared by: {author}</p>
              <p className="stats">
                <span className="icon-wrapper stats-item like">
                  <i className="icon like-icon" />
                  <span className="icon-label">{votingStatus.like || 0}</span>
                </span>
                <span className="icon-wrapper stats-item dislike">
                  <i className="icon dislike-icon" />
                  <span className="icon-label">{votingStatus.dislike || 0}</span>
                </span>
              </p>
            </div>

            <Voting videoID={videoID} />
          </div>

          <div className="description">
            <p className="label">Description:</p>
            <p className="content">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
