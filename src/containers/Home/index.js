import React from 'react';
import { connect } from 'react-redux';
import createPage from '../createPage';
import { Movie } from '../../components';
import './styles.scss';

class HomePage extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="page-wrapper">
        {movies.map((movie, index) => (
          <Movie data={movie} key={`movie-${index + 1}`} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: [...state.movies] });

export default connect(mapStateToProps)(HomePage);
