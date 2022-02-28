/**
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */


let sum = 0;

for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt("Inserisci un numero " + i + "/10", "3"));
    console.log(i);
    sum += number;
    console.log(sum);
}