import { useState, useEffect } from "react";

function NewCourseForm() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [course, setCourse] = useState([]);

  const handleNewCourse = () => {
    fetch(`https://localhost:7095/api/Courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
  };

  return (
    <div class="new-form">
      <input
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.teacher}
        onChange={(e) => setCourse({ ...course, teacher: e.target.value })}
      />
      <input
        value={course.period}
        onChange={(e) => setCourse({ ...course, period: e.target.value })}
      />
      <button onClick={() => handleNewCourse(course.CourseId)}>Add</button>
    </div>
  );
}

export default NewCourseForm;