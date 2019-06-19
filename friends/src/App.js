import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './FriendsList';
import uuid from 'uuid';
import './App.css';
import FriendForm from './FriendForm';

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

  addFriend = name => {
    const newFriend = {
      id: uuid(),
      name,
      age: 39,
      email: 'jack@yahoo.com'
    };
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
    // this.setState({friends: [...this.state.friends, newFriend]})
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  updateFriend =(id, newFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
  
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <FriendsList
                {...props}
                addFriend={this.addFriend}
                friends={this.state.friends}
                deleteFriend={this.deleteFriend}
              />
            );
          }}
        />

        <Route
          path="/:id"
          render={props => {
            return <FriendForm updateFriend={this.updateFriend} {...props} friends={this.state.friends} />;
          }}
        />
      </>
    );
  }
}

export default App;
