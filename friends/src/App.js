import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './FriendsList'
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
   
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    console.log(this.state.friends);
    return (
      <div>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
