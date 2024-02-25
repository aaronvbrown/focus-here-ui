import React, { useState, useEffect } from 'react';

function Students() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7095/api/Student`)  
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
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <React.Fragment>
        <div>
          <h1>Students</h1>
          <ul>
            {students.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
