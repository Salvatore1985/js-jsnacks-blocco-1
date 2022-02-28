/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */

//*CREO UNA VARIABILE PER CHIEDERE L'INPUT DALL'UTENTE
const numberUser = prompt("Inserisci un numero di 7 cifre", "1111111");

//*CREO UNA ARRAY DI SOMMA 
let sum = 0;


//*CREO UN CICLO 
for (let i = 0; i < numberUser.length; i++) {
    sum += parseInt(numberUser.charAt(i));
    console.log(sum);

}

console.log(sum);