import React from 'react';
import './MovieInfo.scss';
import { connect } from 'react-redux'

const MovieInfo = ({id, movies}) => {
  const movieId = parseInt(id.id)
  const selectedMovie = movies.find(movie => movie.id === movieId)
  const { title, release_date, vote_average, overview, backdrop_path } = selectedMovie
  const d = new Date(`${release_date}`);
  const date = `${d.getFullYear()}`;
    return (
      <section>
        <div className='movie-info-full'>
          <figure className='movie-figure'>
            <figcaption>
              <h1 className='movie-info-header'>{`${title}(${date})`}</h1>
              <p className='movie-info-vote'>{vote_average}</p>
            </figcaption>
            <img className='movie-backdrop' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt='movie backdrop' />
          </figure>
          <p className='movie-info-overview'>{overview}</p>
        </div>
      </section>
    )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MovieInfo); 