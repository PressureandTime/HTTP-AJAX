import React, { Component } from 'react';

export class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
      email: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.updateFriend(this.state.id, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({ id: '', name: '', age: '', email: '' });
    this.props.history.push('/');
  };

  componentDidMount() {
    const friends = this.props.friends;
    const id = this.props.match.params.id;
    const friend = friends.find(friend => {
      return id === friend.id;
    });

    this.setState({ ...friend });
  }

  render() {
    console.log(this.props.friends)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Form for updating friends</h3>

          <input
            value={this.state.name}
            onChange={this.onChange}
            name="name"
            type="text"
          />
          <input
            value={this.state.age}
            onChange={this.onChange}
            name="age"
            type="text"
          />
          <input
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            type="text"
          />
          <br />
          <button>Update Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
