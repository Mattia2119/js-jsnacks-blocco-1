//Variabile somma//

let somma = 0;

//chiedo per 10 volte un numero che il programma andrà a sommare//

let i = 0;

while (i < 3) {

    let numero = parseInt(prompt("Inserisci un numero"));

    if (isNaN(numero)) {
        numero = 0;
        alert("il valore inserito non è valido, lo considero 0");
    }

    somma += numero;

    i++;
}

//stampo la somma//

alert("La somma vale:" + somma);

