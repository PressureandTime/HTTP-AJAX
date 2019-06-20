import React from 'react';
import { Route, Link } from 'react-router-dom';

class AllFriends extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
        <Link to={`/${this.props.id}`}>
          <button>Update</button>
        </Link>

        <button onClick={() => this.props.deleteFriend(this.props.id)}>
          delete
        </button>
      </div>
    );
  }
}

export default AllFriends;
