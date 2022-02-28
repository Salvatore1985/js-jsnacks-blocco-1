/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */
//*CREAO UN ARRAY VUOTO

const numberLIst = [];
console.table(numberLIst);


for (let i = 0; i < 6; i++) {
    const number = parseInt(prompt("Inserisci un numero " + i + "/6", "3"));
    console.log(i);
    if (number % 2 === 1) {
        numberLIst.push(number);
    }


    console.table(numberLIst);
}