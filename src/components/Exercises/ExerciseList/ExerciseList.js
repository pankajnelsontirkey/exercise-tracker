import React, { Component } from 'react';

import Axios from 'axios';

import Aux from '../../../hoc/Auxilary';
import Exercise from './Exercise/Exercise';
import classes from './ExerciseList.module.css';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/exercises/')
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  deleteExercise = (id) => {
    Axios.delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => {
        console.log('Item deleted.');
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
    let updatedExercises = this.state.exercises.filter((el) => el._id !== id);
    this.setState({ exercises: updatedExercises });
  };

  render() {
    let exercises = null;
    if (this.state.exercises.length) {
      exercises = this.state.exercises.map((exercise) => (
        <Exercise key={exercise._id} exerciseData={exercise} delete={() => this.deleteExercise(exercise._id)} />
      ));
    } else {
      exercises = (
        <tr>
          <td colSpan={0}>'No exercises added'</td>
        </tr>
      );
    }
    return (
      <Aux>
        <div className={`${classes.ExerciseList} table-responsive-lg`}>
          <h3>Exercises</h3>
          <table className='table table-striped'>
            <thead className='thead-light'>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration (mins)</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{exercises}</tbody>
          </table>
        </div>
      </Aux>
    );
  }
}
