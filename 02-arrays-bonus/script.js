const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for(i = teachers.length - 1; i >= 0; i--){
  const currentTeacher = teachers[i];
  reversedTeachers.push(currentTeacher);
}
console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
  }
}
console.table(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for(i = 0; i < teachers.length && isFabioPresent === false; i++) {
  const currentTeacher = teachers[i];
  if(currentTeacher === "Fabio") {
    isFabioPresent = true;
  }
}
console.log(`Fabio è presente nell'array? ` + isFabioPresent);



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = ``;

for(i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  teachersString += currentTeacher;
  if(i < teachers.length - 1) {
    teachersString += `, `;
  }
}
console.log(teachersString);