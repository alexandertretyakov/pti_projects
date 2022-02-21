import React from 'react';

class PopUp extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.onClosePopUp();
        }
    };

    render() {
        const {movie, onClosePopUp} = this.props;

        return (
            <>
                <div className="overlay" />
                <div className="popup">
                    <button className="close" onClick={onClosePopUp}>x</button>

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
                </div>
            </>
        );
    };
}

export default PopUp;