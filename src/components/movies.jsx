import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {

    state = {
        movies : getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m !== movie)
        this.setState({movies})
    }
    render() {
        return (
            <div>
                <div className="example-container">
                    <h3>There are {this.getTotalMovies()} movies in the Database.</h3>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th >Genre</th>
                        <th >Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm ">Delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    getTotalMovies(){
        return this.state.movies.length;
    }

}

export default Movies;