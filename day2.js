// Main exercise
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('¿Cuál es su nombre?  ->  ');
const age = prompt('¿Cuántos años tienes?  -> ');
const languagePrograming = prompt('¿Qué lenguaje de programación estás estudiando?  ->  ');

console.log(`\nHola ${name}, tienes ${age} años y ya estas aprendiendo ${languagePrograming}, ¡Te felicito!`);

// Extra
let question = 0;

while(question !== 1 && question !== 2) {
    question = parseInt(prompt(`\n¿Te gusta estudiar ${languagePrograming}? Responde con el número 1 para SÍ o 2 para NO  ->  `));

    if(question !== 1 && question !== 2) {
        console.log('Opcion incorrecta, intenta de nuevo');
    } else {
        if (question === 1) {
            console.log('\n¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
        } else {
            console.log('\nOh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
        }
    }
}