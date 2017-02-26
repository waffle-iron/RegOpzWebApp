import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
class Index extends Component {
  render(){
    return(
      <div>
        <Login />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.querySelector(".react_container"));
