import React, { Component } from "react";
import queryString from 'query-string';


class Topic extends Component {
  render() {

    return (
        <div>
            Topic
            <div>{queryString.parse(location.search).topicid}</div>
        </div>
    );
  }
}

export default Topic;