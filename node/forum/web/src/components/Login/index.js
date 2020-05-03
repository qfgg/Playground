import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from '../../common/js/axois';
import { BASE_URL } from '../../common/js/constants.js';
import './index.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);
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

    login() {
        const { username, password } = this.state;

        axios.post(`${BASE_URL}/login`, {
            username,
            password
        })
            .then(res => {
                alert('logged in successfully');
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    render() {
        const { username, password } = this.state;

        return (
            <div>
                <div className="navbar">
                    <Link to="/">Home </Link>
                </div>
                <div className="login-main">
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
                        <button className="btn btn-primary login-btn mt10" onClick={this.login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);