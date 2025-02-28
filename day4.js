const prompt = require('prompt-sync')({sigint: true});

let numberGuess = Math.floor(Math.random() * 11);
let attemptsNumber = 3;
let numberUser = -1;
const errorMesage = '\n** Error, ingresa un numero valido **\n';

console.log('¡Adivina el numero de 0 a 10!\n')

while(numberUser !== numberGuess) {
    console.log(`Intentos: ${attemptsNumber}`);

    if(attemptsNumber === 0) {
        console.log(`** Lo siento, llegaste al limite de intentos **`);
        break;
    } else {
        numberUser = parseInt(prompt('Dime un numero: '));

        if(numberUser >= 0 && numberUser <= 10) {
            if(numberUser === numberGuess) {
                console.log(`\n--> Felicitaciones adivinaste el numero ${numberGuess} <--`);
            } else {
                console.log('Lo siento, sigue intentando.\n');
                attemptsNumber -= 1;
            }
        } else {
            console.log(errorMesage);
        }
    }
}