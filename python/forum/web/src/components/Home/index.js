import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from '../../common/js/axois';
import { BASE_URL } from '../../common/js/constants.js';
import './index.scss';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            list: [],
            username: ''
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.getTopics = this.getTopics.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {console.log('mount');
        // this.getUserInfo();
        // this.getTopics();
    }
    componentDidUpdate() {
        console.log('update');
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeContent(event) {
        this.setState({content: event.target.value});
    }

    // get user information
    getUserInfo() {
        axios.get(`${BASE_URL}/getUserInfo`)
            .then(res => {
                if (res.data && res.data.data && res.data.data.username) {
                    this.setState({
                        username: res.data.data.username
                    });
                }
            })
            .catch(err => {});
    }

    // get posts
    getTopics() {
        axios.get(`${BASE_URL}/getTopics`)
            .then(res => {
                if (res && res.data && res.data.data) {
                    this.setState({
                        list: res.data.data
                    });
                }
            })
            .catch(err => {});
    }

    submitPost() {
        console.log('post');
        this.props.history.push('/?user=abc');
        const { title, content } = this.state;

        if (title && content) {
            axios.post(`${BASE_URL}/addTopic`, {
                title,
                content
            })
                .then(res => {
                    if (res && res.data) {
                        if (res.data.code === 3) {
                            alert('You haven\'t logged in, log in first!');
                            this.props.history.push('/login');
                        } else if (res.data.code === 0) {
                            this.setState({
                                title: '',
                                content: ''
                            });
                            this.getTopics();
                        }
                    }
                })
                .catch(() => {});
        }
    }

    logout() {
        axios.get(`${BASE_URL}/logout`)
            .then((res) => {
                location.reload();
            })
            .catch(() => {});
    }

    render() {
        const { list = [], title, content, username } = this.state;

        return (
            <div>
                <div className="navbar">
                    {
                        username ? (
                            <div className="account">
                                <span>{ username }</span>
                                <span> / </span>
                                <a className="link" onClick={this.logout}>Sign out</a>
                            </div>
                        ): (
                            <div className="account">testtest
                                <Link to="/login">Login </Link>
                                <span> / </span>
                                <Link to="/register">Register </Link>
                            </div>)
                    }
                </div>
                <div className="form-group post-area clearfix">
                    <label htmlFor="post-title">Subject:</label>
                    <input
                        id="post-title"
                        className="form-control post-title"
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                    <label htmlFor="post-content">Your message:</label>
                    <textarea
                        className="form-control mb10 post-content"
                        rows="3"
                        id="post-content"
                        value={content}
                        onChange={this.handleChangeContent}
                    />
                    <button className="btn btn-primary post-btn" onClick={this.submitPost}>
                        Submit
                    </button>
                </div>
                <div className="topic-list">
                    <ul>
                        {
                            list.map(item =>
                                <li key={item._id} className="topic">
                                    <Link to={`topic?topicid=${item._id}`}>{item.title}</Link>
                                    <div className="topic-author">
                                        <span>by {item.authorName}&nbsp;&nbsp;&nbsp;</span>
                                        <span>{new Date(item.createTime).toLocaleString()}</span>
                                    </div>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);