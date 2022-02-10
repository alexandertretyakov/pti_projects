import React from 'react';

class ListMovies extends React.Component {

    render() {
        return (
            this.props.items.map((movie) => {
                return (
                    this.props.viewType === 'tiles' ?
                        <div className="movie" data-id={movie.id}>
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
                                    <td>{movie.genre}</td>
                                </tr>
                                <tr>
                                    <th>Время:</th>
                                    <td>{movie.time} мин. /{movie.hours} ч.</td>
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
        )
    }
}

export default ListMovies;