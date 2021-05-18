import React, {Component} from 'react';


class ListGroup extends Component {
    render() {
        const {valueProperty, keyProperty, genres, onItemSelect, selectedGenre} = this.props
        return (
            <div className="m2">
                <ul className="list-group m-2">
                    <li  onClick={()=>onItemSelect("")} className={selectedGenre? "list-group-item": "list-group-item active"}>All Genres</li>
                    {genres.map(genre =>
                        <li onClick={()=>onItemSelect(genre)} key={genre[keyProperty]}
                            className={selectedGenre === genre? "list-group-item active":"list-group-item"}>
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