const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];
const goodStudents =students
  .filter(student => student.marks > 50)
  .forEach(student => {
    console.log(`${student.name}: ${student.marks + 5}`);
  });
  const classAverage = students.reduce((total, student) => total + student.marks, 0) / students.length;
  console.log(`class Average: ${classAverage}`);