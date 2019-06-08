import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => (
   <tr>
      <td>{props.exerciseData.username}</td>
      <td>{props.exerciseData.description}</td>
      <td>{props.exerciseData.duration}</td>
      <td>{props.exerciseData.date.substring(0, 10)}</td>
      <td>
         <Link to={`/edit/${props.exerciseData._id}`} className="btn btn-info">
            Edit
         </Link>{' '}
         <button className="btn btn-danger" onClick={props.delete}>
            Delete
         </button>
      </td>
   </tr>
);

export default Exercise;
