import React, { Component } from "react";
import './index.scss';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    addUser() {}

    render() {
        const { username, password } = this.state;

        return (
            <div className="register">
                <div className="form-group userinfo">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={this.handleChangeUsername}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={this.handleChangePassword}
                    />
                    <button className="btn btn-primary adduser-btn mt10" onClick={this.addUser}>
                        Register
                    </button>
                </div>
            </div>
        );
    }
}

export default Register;