import { useState, useEffect } from "react";

function NewStudentForm() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [student, setStudent] = useState([]);

  const handleNewStudent = () => {
    console.log("handleAdd just fired");
    fetch(`https://localhost:7095/api/Students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
  };

  return (
    <div class="new-student-form">
      <input
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        value={student.gradeLevel}
        onChange={(e) => setStudent({ ...student, gradeLevel: e.target.value })}
      />
      <input
        value={student.schoolName}
        onChange={(e) => setStudent({ ...student, schoolName: e.target.value })}
      />
      <button onClick={() => handleNewStudent(student.studentId)}>Add</button>
    </div>
  );
}

export default NewStudentForm;