import React from 'react';
import PropTypes from 'prop-types';

function DeleteStudentButton(props) {
  const { studentId } = props

  const handleDelete = async (studentId) => {
    try {
      await fetch(`https://localhost:7095/api/Students/${studentId}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting student: ', error);
    }
  };

  return (
    <>
      <button onClick={() => handleDelete(studentId)}>Delete</button>
    </>
  );
}

DeleteStudentButton.propTypes = {
  studentId: PropTypes.number
}

export default DeleteStudentButton;  