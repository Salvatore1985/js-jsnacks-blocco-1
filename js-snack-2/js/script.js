/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */

/* const userNameONe = prompt("Inserisci la prima parola");
const userNameTwo = prompt("Inserisci la seconda parola"); */
/* if (!userNameONe||(!isNaN(userNameONe))) {
    
} else {
    
} */
//*RECUPERO L'ELEMENTO DEL DOM
const userNameONe = document.getElementById("text-one");
const userNameTwo = document.getElementById("text-two");
const resultElement = document.getElementById("result");

//*RECUPERO L'ELEMENTO DEL FOR
const btnValid = document.getElementById("btn-valid");

let resultValue = "La parla più lunga è";


//* LEGO UN EVENTO AL BUTTON 
btnValid.addEventListener("click", function () {

    let userNameONeValue = userNameONe.value;
    let userNameTwoValue = userNameTwo.value;

    if (userNameONeValue.length > userNameTwoValue.length) {
        console.log("La parola ", userNameONeValue + " è più lunga");
        resultElement.innerHTML = `${resultValue} ${userNameONeValue} ${userNameTwoValue}`;

    } else if (userNameONeValue.length < userNameTwoValue.length) {
        console.log("La parola ", userNameTwoValue + " è più lunga");
        resultElement.innerHTML = `${resultValue} ${userNameTwoValue} ${userNameONeValue}`;
    } else {
        console.log("La parola " + userNameONeValue + " e la parla " + userNameTwoValue + " sono uguali");
        resultElement.innerHTML = `Le parole e ${userNameONeValue} e ${userNameTwoValue} sono uguali `;
    }


})


