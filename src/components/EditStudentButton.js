import React from 'react';
import PropTypes from 'prop-types';
import EditStudent from './EditStudentForm';

const EditStudentButton = (props) => {
  const { editStudentId } = props;

  const handleEditStudent = async (editStudentId) => {
    console.log("hi")
  };

  return (
    <>
    {/* <EditStudent studentId={editStudentId} /> */}
    <button onClick={() => handleEditStudent(editStudentId)}>
      Edit
    </button>
    </>
    
  );
};

export default EditStudentButton;