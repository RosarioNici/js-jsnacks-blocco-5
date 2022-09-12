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