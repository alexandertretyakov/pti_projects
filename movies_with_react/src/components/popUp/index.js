import React from 'react';

class PopUp extends React.Component {
    componentDidMount() {
        this.clickOnButton = window.addEventListener('keypress', (e) => {

            console.log(e, 'Нажата клавиша')

        })
    };

    // componentWillMount() {
    //     window.removeEventListener('change', this.clickOnButton.bind(this))
    // }

    // hideMoviePopUp = (e) => {
    //     console.log(e)
    //     if (e.key === 'Escape') {
    //         this.props.closePopUp();
    //     }
    // };

    render() {
        return (
            <>
                <div className="overlay" />
                <div className="popup">
                    <button className="close" onClick={this.props.closePopUp}>x</button>
                    {
                        this.props.movie.map((movie) => {
                            return (
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
                    }
                </div>
            </>
        );
    };
}

export default PopUp;