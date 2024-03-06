import React, { useState, useEffect } from 'react';
import DeleteStudentButton from './DeleteStudentButton';

function Students() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7095/api/Students`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setStudents(jsonifiedResponse);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoaded(true);
      });
  }, [isLoaded]);

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <>
        <h1>Students <button onClick={() => setIsLoaded(false)}>Update List</button></h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <button>{student.name}</button> -- Grade: {student.gradeLevel} -- School: {student.schoolName} <DeleteStudentButton studentId={student.studentId} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Students;
