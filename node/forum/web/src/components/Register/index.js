import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../../common/js/constants.js';
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

    addUser() {
        const { username, password } = this.state;

        axios.post(`${BASE_URL}/addUser`, {
            username,
            password
        })
            .then(res => {
                console.log(res);
                alert('registered successfully');
                this.props.history.push('/login');
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
                <div className="register-main">
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
                        <button
                            className="btn btn-primary adduser-btn mt10"
                            onClick={this.addUser}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);