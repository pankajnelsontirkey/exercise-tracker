import React, { Component } from 'react';
import Axios from 'axios';

import Aux from '../../../hoc/Auxilary';
import classes from './CreateUser.module.css';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { username: '' };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username
    };

    Axios.post('http://localhost:5000/users/add', user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });

    this.setState({ username: '' });
  }

  render() {
    return (
      <Aux>
        <div className={classes.CreateUser}>
          <h3>Create a new User</h3>{' '}
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Username: </label>
              <input
                type='text'
                className='form-control'
                value={this.state.username}
                onChange={this.onChangeUsername}
                required
              />
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-primary' />
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}
