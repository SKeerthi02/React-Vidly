import React, {Component} from 'react';
import LikeComponent from "./common/likeComponent";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MovieList extends Component {
    columns = [
        {path: "title", label: "Title"},
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
            <React.Fragment>
                <table className="table table-striped">
                    <TableHeader columns = {this.columns} onSort = {onSort} sortColumn = {sortColumn} />
                    <TableBody data = {movies} columns = {this.columns}/>

                </table>
            </React.Fragment>
        );
    }
}

export default MovieList;