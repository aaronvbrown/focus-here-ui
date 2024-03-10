import React, { useState, useEffect } from 'react';

function EditCourse(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [course, setCourse] = useState([]);
  const { courseId } = props;

  const handleEdit = () => {
    fetch(`https://localhost:7095/api/Courses/${courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
  }
  
  useEffect(() => {
    fetch(`https://localhost:7095/api/Courses/${courseId}`)
      .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
      })
      .then((jsonifiedResponse) => {
      setCourse(jsonifiedResponse);
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
          {course ? (
            <div class="edit-form">
              <input value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} />
              <input value={course.teacher} onChange={(e) => setCourse({ ...course, teacher: e.target.value })} />
              <input value={course.period} onChange={(e) => setCourse({ ...course, period: e.target.value })} />
              <button onClick={() => handleEdit(course.CourseId)}>Update</button>
            </div>
          ) : null}
        </>
      );
    }
}

export default EditCourse;