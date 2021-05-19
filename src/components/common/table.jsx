import React, {Component} from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {

    render() {
        const {movies, columns,sortColumn, onSort} = this.props;
        return (
            <div>
                <table className="table table-striped">
                    <TableHeader columns = {columns} onSort = {onSort} sortColumn = {sortColumn} />
                    <TableBody data = {movies} columns = {columns}/>

                </table>
            </div>
        );
    }
}

export default Table;