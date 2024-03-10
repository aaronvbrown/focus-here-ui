import React, { useState, useEffect } from 'react';

function CanvasCourses() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canvasCourses, setCanvasCourses] = useState([]);

  useEffect(() => {
    fetch(`https://vansd.instructure.com/api/v1/courses?per_page=100&id=2229682&access_token=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setCanvasCourses(jsonifiedResponse);
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
        <h1>Canvas Courses <button onClick={() => setIsLoaded(false)}>Update List</button></h1>
        <ul>
          {canvasCourses.filter(c => c.enrollment_term_id === 11689).map(course => ( // parametrize this term id
            <li key={course.id}>
              {course.course_code} -- StartDate: {course.start_at} -- Term: {course.enrollment_term_id}
            </li>
          ))
          }
        </ul>
      </>
    );
  }
}

export default CanvasCourses;