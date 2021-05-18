import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import LikeComponent from "./common/likeComponent";
import PaginationComponent from "./common/paginationComponent";
import {paginate} from "../utils/pagination";
import {getGenres} from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";

class Movies extends Component {

    state = {
        movies : [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    }

    componentDidMount() {
        this.setState({movies: getMovies(), genres:getGenres() })
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m !== movie)
        this.setState({movies})
    }

    handleLike = movie => {
        let movies = [...this.state.movies];
        const index =  movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    }

    handlePageChange = page =>{
        const currentPage = page;
        this.setState({ currentPage} );
    };

    handleGenreSelect = genre =>{
        console.log(genre)
    }
    render() {
        console.log(this.state.movies.length)
        const {pageSize, currentPage, movies: allMovies, genres } = this.state;
        const movies = paginate(allMovies, currentPage, pageSize)
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup genres={genres} onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
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
                            <th/>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><LikeComponent liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm ">Delete</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <PaginationComponent
                        totalCount = {this.state.movies.length}
                        pageSize ={pageSize}
                        currentPage = {currentPage}
                        onPageChange = {this.handlePageChange}
                    />
                </div>

            </div>
        );
    }

    getTotalMovies(){
        return this.state.movies.length;
    }

}

export default Movies;