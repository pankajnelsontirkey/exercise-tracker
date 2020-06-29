import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Aux from '../../../hoc/Auxilary';
import Axios from 'axios';
import classes from './CreateExercise.module.css';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/users')
      .then((res) => {
        if (res.data.length) {
          this.setState({
            users: res.data.map((user) => user.username),
            username: res.data[0].username
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    Axios.post('http://localhost:5000/exercises/add', exercise)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });

    window.location = '/';
  }

  render() {
    return (
      <Aux>
        <div className={classes.CreateExercise}>
          <h3>Add an exercise</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Username</label>
              <select
                className='form-control'
                ref='userInput'
                value={this.state.username}
                onChange={this.onChangeUsername}
                required
              >
                {this.state.users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label>Description</label>
              <input
                type='text'
                className='form-control'
                value={this.state.description}
                onChange={this.onChangeDescription}
                required
              />
            </div>
            <div className='form-group'>
              <label>Duration (in minutes): </label>
              <input
                type='number'
                className='form-control'
                value={this.state.duration}
                onChange={this.onChangeDuration}
                required
              />
            </div>
            <div className='form-group'>
              <label>Date: </label>
              <div>
                <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
              </div>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-primary' value='Create Exercise Log' />
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}
