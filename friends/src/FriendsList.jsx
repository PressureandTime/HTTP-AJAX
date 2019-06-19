import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AllFriends from './AllFriends';

export class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addFriend(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <AllFriends
              id={friend.id}
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              deleteFriend={this.props.deleteFriend}
            />
          );
        })}
        <br />
        <form onSubmit={this.onSubmit}>
          <h3>Form for adding new friends</h3>
          <input
            value={this.state.name}
            onChange={this.onChange}
            name="name"
            type="text"
            placeholder="Add new friend here..."
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
