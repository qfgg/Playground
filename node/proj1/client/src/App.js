import React, { Component } from 'react';


class App extends Component {
  state = {
    msg:  '载入中...'
  };

  componentDidMount() {
    setTimeout(() => {
      fetch('http://localhost:9000/testapi')
      .then(res => {
        console.log(res);
        return res.text();
      })
      .then(res => this.setState({
        msg: res
      }))
      .catch(err => err);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}

export default App;
