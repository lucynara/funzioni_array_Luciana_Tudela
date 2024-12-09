// ESERCIZIO 1
// Dati i seguenti array mischiati e confusi:
// let array_1 =[
//  ['un', 'per', 'incatenarli.'],
//  ['Anello', 'trovarli,'],
//  ['ghermirli', 'e'],
//  ['gondor', 'mark'],
// ];

// let array_2 = [
//  [['trovarli,']],
//  ['tu,', 'sciocchi'],
//  ['tu,', 'sciocchi', ['padron', 'Sauron']],
//  ['nel', ['fuggite', 'gandalf']],
//  [['domarli,', 'passare'], 'buio']
// ];
// Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“ HINT
// Non tutte le parole sono necessarie per la frase;
// Occhio agli array annidati


// let array_1 =[
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//    ];

// let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];
  

//   let un = array_1[0][0];
//   let anello = array_1[1][0];
//   let per = array_1[0][1]; 
//   let domarli = array_2[4][0][0];
//   let trovarli = array_1[1][1];
//   let ghermirli = array_1[2][0];
//   let e = array_1[2][1];
//   let nel = array_2[3][0];
//   let buio = array_2[4][1];
//   let incatenarli = array_1[0][2];
  
//   let frase = `${un} ${anello} ${per} ${domarli} ${un} ${anello} ${per} ${trovarli} ${un} ${anello} ${per} ${ghermirli} ${e} ${nel} ${buio} ${incatenarli}`;
  
//   console.log(frase);


// ESERCIZIO 2
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'


// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 15 === 0) {
//         console.log('fizzBuzz');
//       } else if (i % 3 === 0) {
//         console.log('Fizz');
//       } else if (i % 5 === 0) {
//         console.log('Buzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }


// ESERCIZIO 3
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande


// function conta(numero) {
//     if (numero > 9999) {
//       return "Numero troppo grande";
//     }
  
//     let cifre = 0;
//     let n = numero;
  
//     while (n > 0) {
//       n = Math.floor(n / 10);
//       cifre++;
//     }
  
//     return `il numero ha ${cifre} cifra/e`;
//   }
  
//   console.log(conta(9));     
//   console.log(conta(99));   
//   console.log(conta(999));  
//   console.log(conta(12000)); 
  

// ESERCIZIO 4
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]

// Variante:
// Prova ad ordinali in modo crescente.


let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

array.sort((a, b) => b - a);
console.log("Decrescente:", array); 

array.sort((a, b) => a - b);
console.log("Crescente:", array); 

// ESERCIZIO 5:
// Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// dovra’ restituire come risultato, let newArray = [50, 70, 90]


let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];

let newArray = [];
for (let i = 0; i < numbers1.length; i++) {
  newArray.push(numbers1[i] + numbers2[i]);
}

console.log(newArray); 
