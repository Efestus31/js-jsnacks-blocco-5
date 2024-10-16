const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//risoluzione esercizio usando map
const names = people.map(person => person.name).join(', ');
console.log(names);

//risoluzione usando il ciclo for (facoltativo)
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
  
}

