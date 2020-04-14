import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.scss';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            list: [{
                title: 'how is it going on today?',
                author: 'Dick'
            }, {
                title: 'what the hell is going on?',
                author: 'Dumbass'
            }]
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeContent(event) {
        this.setState({content: event.target.value});
    }

    submitPost() {
        const { title, content } = this.state;
        const now = new Date();
    }

    render() {
        const { list = [], title, content } = this.state;

        return (
        <div>
            <div className="navbar">
                <Link to="/">Home </Link>
                <div className="account">
                    <Link to="/login">Login </Link>
                    <span> / </span>
                    <Link to="/register">Register </Link>
                </div>
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
                            <li key={item.topicid} className="topic">
                                <Link to={`topic?topicid=${item.topicid}`}>{item.title}</Link>
                                <div className="topic-author">by {item.author}</div>
                            </li>)
                    }
                </ul>
            </div>
        </div>
        );
    }
}

export default Home;