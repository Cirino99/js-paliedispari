/*
    Parola Palidroma js
*/
function palindroma(parola){
    let parolaUtenteInversa = '';
    for (let i=1; i<=parola.length; i++){
        parolaUtenteInversa += parola[parola.length-i];
    }
    if (parola === parolaUtenteInversa){
        return 'La parola è palindroma';
    } else {
        return 'La parola non è palindroma';
    }
}


const textUser = document.getElementById('parola-utente');
const button = document.getElementById('invio');
const risultato = document.getElementById('risultato');
button.addEventListener('click',
    function () {
        let palindromia = palindroma(textUser.value);
        risultato.innerText = palindromia;
    }
);