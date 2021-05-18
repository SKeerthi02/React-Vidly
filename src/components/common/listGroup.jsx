import React, {Component} from 'react';


class ListGroup extends Component {
    render() {
        const {valueProperty, keyProperty, genres} = this.props
        return (
            <div className="m2">
                <ul className="list-group m-2">
                    <li  className="list-group-item">All Genres</li>
                    {genres.map(genre =>
                        <li key={genre[keyProperty]}
                            className="list-group-item">
                            {genre[valueProperty]}
                        </li>)}
                </ul>
            </div>
        );
    }
}

ListGroup.defaultProps = {
    valueProperty: "name",
    keyProperty: "_id"
}
export default ListGroup;