import React, { useState, useEffect } from 'react';
import DeleteCourseButton from './DeleteCourseButton';
import EditCourse from './EditCourseForm';
import NewCourseForm from './NewCourseForm';

function Courses() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7095/api/Courses`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setCourses(jsonifiedResponse);
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
        <h1>Courses <button onClick={() => setIsLoaded(false)}>Update List</button></h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.name} -- Grade: {course.teacher} -- School: {course.period} <DeleteCourseButton courseId={course.courseId} />
              <EditCourse courseId={course.courseId} />
            </li>
          ))
          }
          <li>Create New Course
            <NewCourseForm />
          </li>
        </ul>
      </>
    );
  }
}

export default Courses;
