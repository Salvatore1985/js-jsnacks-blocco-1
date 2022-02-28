/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const numberOne = parseInt(prompt("inserisci un numero"));
const numberTwo = parseInt(prompt("inserisci un numero"));

if (numberOne > numberTwo) {
    console.log("il numberOne ha vinto con ", numberOne);

} else if (!(numberOne > numberTwo)) {
    console.log("il numberTwo ha vinto con ", numberTwo);
} else {
    console.log("il number sono pari il numero è ", numberTwo);
} 