const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//esercizio fatto con for loop
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//esercizio svolto usando forEach
names.forEach(function(name){
    console.log(name);
    
})