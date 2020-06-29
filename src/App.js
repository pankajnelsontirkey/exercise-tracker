import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateExercise from './components/Exercises/CreateExercise/CreateExercise';
import CreateUser from './components/Users/CreateUser/CreateUser';
import EditExercise from './components/Exercises/EditExercise/EditExercise';
import ExerciseList from './components/Exercises/ExerciseList/ExerciseList';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExerciseList} />
        <Route path='/exercises/add' exact component={CreateExercise} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/users' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
