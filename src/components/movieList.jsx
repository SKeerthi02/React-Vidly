import React, {Component} from 'react';
import LikeComponent from "./common/likeComponent";
import Table from "./common/table";
import {Link} from "react-router-dom";

class MovieList extends Component {
    columns = [
        {path: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: "genre.name", label: "Genre"},
        {path: "numberInStock", label: "Stock"},
        {path: "dailyRentalRate", label: "Rate"},
        {
            key: "like",
            content: movie => (<LikeComponent
                liked={movie.liked}
                onClick={() => this.props.onLike(movie)}
            />)},
        {
            key: "delete",
            content:movie =>(<button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm ">
                Delete
            </button>)}
    ]


    render() {
        const {movies, onSort, sortColumn} = this.props;
        return (
                <Table movies={movies} sortColumn={ sortColumn} columns={this.columns} onSort = {onSort}/>
        );
    }
}

export default MovieList;