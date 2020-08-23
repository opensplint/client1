import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      //.then(users => this.setState({ users: users }));
      .then(users => this.setState({ users }, () => console.log('Users Fetched...', users)));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {/*object properties are case sensitive, id1 and ID1 are different*/}
          {this.state.users.map(user =>
            <li key={user.ID1}>{user.Name1}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Users;