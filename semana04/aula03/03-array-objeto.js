const students = [
    { "name": "Ana", "grade": 8, "imgURL": "https://link.com"},
    { "name": "Bruno", "grade": 5, "imgURL": "https://link.com"},
    { "name": "Carla", "grade": 7, "imgURL": "https://link.com"}
]

console.log(students);

//json

console.log(students[0].name);
console.log(students[2].grade);


//somente o nome, mas nome de todos
students.forEach((student) => {
    console.log(student.name);
})