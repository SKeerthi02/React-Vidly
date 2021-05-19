import React, {Component} from 'react';
import Input from "./common/input";

class LoginForm extends Component {

    state = {
        account:{
            username:"",
            password:""
        },
        errors:{

        }
    }
    validate = () => {
        const errors = {};
        const {account} = this.state;

        if (account.username.trim() === '')
            errors.username = "Username is required";
        if (account.password.trim() === '')
            errors.password = "Username is required";

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        // const username = this.username.current.value;
        const errors = this.validate()
        this.setState({errors: errors || {}});

    }

    handleOnChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account});

}
    render() {
        const {account, errors} = this.state
        return (
            <div >
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleOnChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        error={errors.password}
                        onChange={this.handleOnChange}/>
                    <button className="btn btn-primary m-2">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;