import React, { useState, useEffect } from 'react';

function EditStudent(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [student, setStudent] = useState([]);
  const { studentId } = props;

  const handleEdit = () => {
    console.log("handleEdit just fired")
  }
  
  useEffect(() => {
    fetch(`https://localhost:7095/api/Students/${studentId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setStudent(jsonifiedResponse);
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
          {student ? (
            <div class="edit-student-form">
              <input value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
              <input value={student.gradeLevel} onChange={(e) => setStudent({ ...student, gradeLevel: e.target.value })} />
              <input value={student.schoolName} onChange={(e) => setStudent({ ...student, schoolName: e.target.value })} />
              <button onClick={() => handleEdit(student.studentId)}>Save</button>
            </div>
          ) : null}
        </>
      );
    }
}

export default EditStudent;