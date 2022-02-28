
/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

//*RECUPERO L'ELEMENTO DEL DOM
const userNameONe = document.getElementById("text-one");
const resultElement = document.getElementById("result");

//*RECUPERO L'ELEMENTO DEL FOR
const btnValid = document.getElementById("btn-valid");
//*CREO UN ARRAY DI NOMI
const username =
    ["marco",
        "giovanni",
        "francesco",
        "filippo",
        "chiara",
        "roberta",
    ]
console.table(username);
let resultValue = "Puoi entrare alla festa";


//* LEGO UN EVENTO AL BUTTON 
btnValid.addEventListener("click", function () {

    let userNameONeValue = userNameONe.value;
    let isApprovate = false;
    for (let i = 0; i < username.length; i++) {
        if (username.includes(userNameONeValue)) {
            isApprovate = true;
            console.log(isApprovate);
        }
    }

    if (isApprovate) {
        resultElement.innerHTML = `${resultValue} la parola  ${userNameONeValue} è nella lista`;

    } else {

        resultElement.innerHTML = `Il nome  ${userNameONeValue} non è nella lista  `;
    }


})
