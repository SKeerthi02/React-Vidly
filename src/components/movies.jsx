import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import PaginationComponent from "./common/paginationComponent";
import {paginate} from "../utils/pagination";
import {getGenres} from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MovieList from "./movieList";
import _ from "lodash";

class Movies extends Component {

    state = {
        movies : [],
        genres: [],
        selectedGenre:"",
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{name: "All Genres", _id:""}, ...getGenres()];
        this.setState({movies: getMovies(), genres })
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
       this.setState({selectedGenre: genre, currentPage:1})
    }

    handleSort =  sortColumn => {
        this.setState( {sortColumn });
    }

    getPageData = () => {
        const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;
        const filteredMovie = selectedGenre && selectedGenre._id ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;

        const sortedList = _.orderBy(filteredMovie, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sortedList, currentPage, pageSize)
        return { totalCount: filteredMovie.length, data : movies}
    }
    render() {
        console.log(this.state.movies.length)
        const {pageSize, currentPage, movies: allMovies, genres, selectedGenre, sortColumn } = this.state;

        const {totalCount, data: movies} = this.getPageData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup genres={genres} onItemSelect={this.handleGenreSelect} selectedGenre={selectedGenre}/>
                </div>
                <div className="col">
                    <div className="example-container">
                        <h3>There are {totalCount} movies in the Database.</h3>
                    </div>
                    <MovieList
                        movies = {movies}
                        sortColumn ={sortColumn}
                        onLike = {this.handleLike}
                        onDelete = {this.handleDelete}
                        onSort = {this.handleSort}
                    />
                    <PaginationComponent
                        totalCount = {totalCount}
                        pageSize ={pageSize}
                        currentPage = {currentPage}
                        onPageChange = {this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;