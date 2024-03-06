import react from 'react';
import PropTypes from 'prop-types';

function DeleteStudentButton(props) {
  const { studentId } = props;
  return (
    <button onClick={() => props.onClick(props.id)}>Delete</button>
  );
}