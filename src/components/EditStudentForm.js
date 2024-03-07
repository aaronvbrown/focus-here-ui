import React, { useState, useEffect } from 'react';

function EditStudent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [student, setStudent] = useState([]);

  const handleEdit = () => {
    console.log("handleEdit just fired")
  }
  
  useEffect(() => {
    fetch(`https://localhost:7095/api/Students/{studentId}`)
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
          <div>
            <input value={student.name} />
            <input value={student.gradeLevel} />
            <input value={student.schoolName} />
            <button onClick={() => handleEdit(student.studentId)}>Save</button>
          </div>
        ) : null}
      </>
    );
  }
}

export default EditStudent;