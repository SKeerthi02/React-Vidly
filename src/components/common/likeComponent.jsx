import React, {Component} from 'react';

class LikeComponent extends Component {
    render() {
        let classes = "fa fa-heart";
        classes += this.props.liked? "-o": "";

        return (
            <div>
                <i onClick={this.props.onClick} style={{cursor:"pointer"}} className={classes}/>
            </div>
        );
    }
}

export default LikeComponent;