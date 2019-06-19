import React, { Component } from 'react';
import AllFriends from './AllFriends';

export class FriendsList extends Component {
  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <AllFriends
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
