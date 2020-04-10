import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    list: [],
    addInput: '',
    currentId: 1,
    delInput: '',
    updateInputId: '',
    updateInputVal: ''
  }

  componentDidMount() {
    // fetch list
    this.getList();
  }

  typeAdd = evt => {
    this.setState({
      addInput: evt.target.value
    });
  };

  typeDel = evt => {
    this.setState({
      delInput: evt.target.value
    });
  };

  typeUpdate1 = evt => {
    this.setState({
      updateInputId: evt.target.value
    });
  };

  typeUpdate2 = evt => {
    this.setState({
      updateInputVal: evt.target.value
    });
  };

  getList = () => {
    axios.get('http://localhost:3001/api/getData')
      .then((res) => {
        if (res.data) {
          this.setState({
            list: res.data.data || []
          })
        }
      });
  };

  add = () => {
    const msg = this.state.addInput.trim();
    if (msg) {
      axios.post('http://localhost:3001/api/addData', {
      id: this.state.currentId,
      message: msg
    }).then((res) => {
        this.setState({
          addInput: '',
          currentId: this.state.currentId + 1
        });
        this.getList();
      });
    }
  };

  del = () => {
    const id = this.state.delInput.trim();
    if (id) {
      this.state.list.forEach(item => {
        if (Number(item.id) === Number(id)) {
          axios.delete('http://localhost:3001/api/deleteData', {
            data: {
              id: item._id
            }
          }).then((res) => {
            this.setState({
              delInput: ''
            });
            this.getList();
          });
        }
      });
    }
  };

  update = () => {
    const id = this.state.updateInputId.trim();
    const msg = this.state.updateInputVal.trim();
    if (id && msg) {
      this.state.list.forEach(item => {
        if (Number(item.id) === Number(id)) {
          axios.put('http://localhost:3001/api/updateData', {
              id: item._id,
              update: {
                message: msg
              }
          }).then((res) => {
            this.setState({
              updateInputId: '',
              updateInputVal: ''
            });
            this.getList();
          });
        }
      });
    }
  };

  render() {
    const {
      list,
      addInput,
      delInput,
      updateInputId,
      updateInputVal
    } = this.state;

    return (
      <div>
        <ul>
          {
            list.map(item => (
              <li key={item.message}>
                <p>id: {item.id}</p>
                <p>data: {item.message}</p>
              </li>
            ))
          }
        </ul>
        <div>
          <input
            type="text"
            value={addInput}
            onChange={this.typeAdd}
            placeholder="put something to add"
          />
          <button type="button" onClick={this.add}>ADD</button>
        </div>
        <div>
          <input
            type="text"
            value={delInput}
            onChange={this.typeDel}
            placeholder="put id here"
          />
          <button type="button" onClick={this.del}>DELETE</button>
        </div>
        <div>
          <input
            type="text"
            value={updateInputId}
            onChange={this.typeUpdate1}
            placeholder="put id here"
          />
          <input
            type="text"
            value={updateInputVal}
            onChange={this.typeUpdate2}
            placeholder="put value here"
          />
          <button type="button"  onClick={this.update}>UPDATE</button>
        </div>
      </div>
    );
  }
}

export default App;
