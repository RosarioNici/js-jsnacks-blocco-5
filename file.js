/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


const teams = [

    {
        nome: 'Juventus', punti: 0, falli: 0,
    },
    {
        nome: 'Inter', punti: 0, falli: 0,
    },
    {
        nome: 'Milan', punti: 0, falli: 0,
    },
    {
        nome: 'Napoli', punti: 0, falli: 0,
    },
    {
        nome: 'Roma', punti: 0, falli: 0,
    },

]







teams.forEach((stats) => {
    stats.punti = generateRandomNumber(0, 84)
    stats.falli = generateRandomNumber(0, 84)
})

console.log(teams)


function generateRandomNumber(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * 84) + min
}



/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */
const arrayNumbers = [23, 45, 3, 5, 67, 31, 23, 78, 10, 6, 4, 9, 11,]
function splitArray(array, min, max) {
    let arraySecondary = []
    array.forEach((number, i) => {
        if (i >= min && i < max) {
            arraySecondary.push(number)
        }
    })
    return arraySecondary
};



let newSecondaryArray = splitArray(arrayNumbers, 1, 7)



console.log(newSecondaryArray)










/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */