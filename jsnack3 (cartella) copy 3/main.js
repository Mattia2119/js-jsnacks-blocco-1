//dichiaro una variabile somma 

let somma = 0;
let media = 0;
const limite = 20;

//scorro i primi 10 numeri 

for (let i =1; i<= limite; i++) {

    somma += i;
}

//calcolo della media

media = somma / limite;

//stampo la media e la somma dei numeri 
alert(`La somma è: ${somma}; la media è: ${media}`);

