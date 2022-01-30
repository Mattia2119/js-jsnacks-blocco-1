const numero = parseInt(prompt("Fino a quale numero vuoi stampare il cubo?"));

if (isNaN(numero) || numero <= 0) {
    alert("Il numero inserito non è valido!");
} else {

//Creo il ciclo per recuperare tutti i nuemri inseriti dall'utente

for (let i=1; i<=numero; i++) {

   const cubo = Math.pow(i, 3);
 
   //Me lo salvo

   console.log(cubo);
}






}