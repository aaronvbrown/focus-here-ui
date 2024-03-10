import React from 'react';
import PropTypes from 'prop-types';

function DeleteCourseButton(props) {
  const { courseId } = props

  const handleDelete = async (courseId) => {
    try {
      await fetch(`https://localhost:7095/api/Courses/${courseId}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting course: ', error);
    }
  };

  return (
    <>
      <button onClick={() => handleDelete(courseId)}>Delete</button>
    </>
  );
}

DeleteCourseButton.propTypes = {
  courseId: PropTypes.number
}

export default DeleteCourseButton;