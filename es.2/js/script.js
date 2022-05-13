/*
    Pari o dispari js
*/

const descrizione = document.getElementById('descrizione');
const numeroUtente = document.getElementById('numero-utente');
const numeroPc = Math.floor(Math.random() * 5 + 1);
const pariOdispariUtente = document.getElementById('pari-dispari');
const risultato = document.getElementById('risultato');
const button = document.getElementById('invio');
button.addEventListener('click', 
    function(){
        let numeroUtenteValore = parseInt(numeroUtente.value);
        const numeroValidoUtente = controlloNumero(numeroUtenteValore,1,5);
        if (numeroValidoUtente){
            const numeroPc = numeroRandom (1,5);
            let risultatoPariODispari = pariOdispari(numeroUtenteValore,numeroPc);
            if (pariOdispariUtente.value === risultatoPariODispari){
                risultato.innerText = `Complimenti hai vinto il numero uscito è ${risultatoPariODispari}`;
            } else {
                risultato.innerText = `RIP hai perso il numero uscito è ${risultatoPariODispari}`;
            }
        } else {
            descrizione.innerText = 'ATTENZIONE! il numero inserito deve essere compreso tra 1 e 5';
        }
    }
);

function controlloNumero(numero,min,max){
    if(numero>=min && numero<=max){
        return true;
    }
    else{
        return false;
    }
}

function numeroRandom (min,max){
    let numero = Math.floor(Math.random() * (max-min+1) + min);
    return numero;
}

function pariOdispari(primoNumero,secondoNumero){
    let numero = primoNumero + secondoNumero;
    //console.log(numero);
    if(numero%2){
        return 'Dispari';
    } else {
        return 'Pari';
    }
}