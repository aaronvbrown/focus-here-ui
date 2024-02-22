import React, { useState, useEffect } from 'react';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7095/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}
