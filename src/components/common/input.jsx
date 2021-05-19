import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {name, label, value, onChange, error} = this.props
        return (
            <div className="form-label m-2">
                <label htmlFor={name}>{label}</label>
                <input
                    value={value}
                    id={name}
                    name={name}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        );
    }
}

export default Input;