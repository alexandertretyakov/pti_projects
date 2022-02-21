import React from 'react';

const ListMovies = ({viewType, items, onMovieClick}) => {
    return (
        <div className={`movies ${viewType === 'tiles' ? 'state-tiles' : 'state-list'}`}>
            {
                items.map((movie) => {
                    return (
                        viewType === 'tiles' ?

                            <div className="movie" onClick={onMovieClick.bind(null, movie.id)}>
                                <div className="movie-image-container">
                                    <a href="#"><img src={`images/movies/${movie.id}.jpg`} /></a>
                                </div>

                                <a className="movie-title" href="#">{movie.title}</a>

                                <div className="movie-details">
                                    <span>{movie.year}</span>
                                </div>
                            </div> :

                            <div className="movie">
                                <div className="movie-image-container">
                                    <a href="#"><img src={`images/movies/${movie.id}.jpg`} /></a>
                                </div>
                                <a className="movie-title" href="#">{movie.title}</a>
                                <table className="movie-details">
                                    <tbody>
                                    <tr>
                                        <th>Год:</th>
                                        <td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <th>Страна:</th>
                                        <td>{movie.countries}</td>
                                    </tr>
                                    <tr>
                                        <th>Жанр:</th>
                                        <td>{movie.genre.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Время:</th>
                                        <td>{movie.time} мин. / {movie.hours} ч.</td>
                                    </tr>
                                    <tr>
                                        <th>Рейтинг:</th>
                                        <td>{movie.rating}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="movie-plot">{movie.plot}</div>
                            </div>
                    );
                })
            }
        </div>
    );
};

export default ListMovies;